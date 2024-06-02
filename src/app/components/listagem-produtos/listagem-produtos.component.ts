import { Component, Input } from '@angular/core';
import { Produto } from '../../modelo/Produto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listagem-produtos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listagem-produtos.component.html',
  styleUrl: './listagem-produtos.component.css'
})
export class ListagemProdutosComponent {

  @Input() vetor: Produto[] = [];
}
