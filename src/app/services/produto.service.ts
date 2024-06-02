import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../modelo/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  api: string = 'http://localhost:3000/produtos';

  findAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.api);
  }

  save(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.api, produto);
  }

  update(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.api}/${produto.id}`, produto);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.api}/${id}`);
  }

}
