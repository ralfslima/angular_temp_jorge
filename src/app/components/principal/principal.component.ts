import { Component } from '@angular/core';
import { ListagemProdutosComponent } from "../listagem-produtos/listagem-produtos.component";
import { CadastroProdutosComponent } from "../cadastro-produtos/cadastro-produtos.component";
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../modelo/Produto';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-principal',
  standalone: true,
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css',
  imports: [ListagemProdutosComponent, CadastroProdutosComponent, CommonModule, ReactiveFormsModule]
})
export class PrincipalComponent {

  constructor(private service: ProdutoService) { }

  produtos: Produto[] = [];

  formulario = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl(''),
    valor: new FormControl(null)
  });


  findAll() {
    return this.service.findAll()
      .subscribe(response => this.produtos = response);
  }

  save(form:FormGroup) {
    return this.service.save(form.value as Produto)
      .subscribe(response => {
        this.produtos.push(response);
        this.formulario.reset();
      });
  }

  findById(indice: number) {
    this.formulario.setValue({
      id: this.produtos[indice].id,
      nome: this.produtos[indice].nome,
      valor: this.produtos[indice].valor
    });
  }

  update() {
    this.service.update(this.formulario.value as Produto)
      .subscribe(response => {
        let indiceAlterado = this.produtos.findIndex(produto => {
          return this.formulario.value.id === produto.id;
        });
        this.produtos[indiceAlterado] = response;
        this.formulario.reset();
      })
  }

  delete() {
    this.service.delete(this.formulario.value.id)
      .subscribe(() => {
        let indiceRemovido = this.produtos.findIndex(produto => {
          return produto.id === this.formulario.value.id;
        });
        this.produtos.splice(indiceRemovido, 1);
        this.formulario.reset();
      })
  }

  ngOnInit() {
    this.findAll();
  }

}
