import { Component, EventEmitter, Output } from '@angular/core';
import { Produto } from '../../modelo/Produto';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro-produtos',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './cadastro-produtos.component.html',
  styleUrl: './cadastro-produtos.component.css'
})
export class CadastroProdutosComponent {

  produto: Produto;

  @Output() funcao = new EventEmitter<FormGroup>();

  cadastrarProduto() {
    this.funcao.emit(this.formulario);
  }

  formulario = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl(''),
    valor: new FormControl(null)
  });

}
