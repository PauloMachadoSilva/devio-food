import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { ICarrinhoCompras } from '../../interfaces/carrinho-compras';
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
    'Access-Control-Allow-Headers':
      'Content-Type, Authorization, X-Requested-With',
  }),
};

@Injectable()
export class PedidosService {
  constructor(private _httpClient: HttpClient) {}

  consultarPedidos(status: string) {
    return this._httpClient.get(`${environment.apiProd}/pedidos/${status}`, httpOptions);
  }

  adicionarPedido(carrinho: ICarrinhoCompras): Observable<any> {
    return this._httpClient
      .post(`${environment.apiProd}/pedidos`, carrinho, httpOptions)
      .pipe(tap());
  }

  confirmarPedido(id: string): Observable<any> {
    const data = {
        _id: id
    }
    return this._httpClient
      .post(`${environment.apiProd}/pedidos/confirmar`, data, httpOptions)
      .pipe(tap());
  }

  recusarPedido(id: string): Observable<any> {
    const data = {
        _id: id
    }
    return this._httpClient
      .post(`${environment.apiProd}/pedidos/recusar`, data, httpOptions)
      .pipe(tap());
  }

  retornarPedido(id: string): Observable<any> {
    const data = {
        _id: id
    }
    return this._httpClient
      .post(`${environment.apiProd}/pedidos/retornar`, data, httpOptions)
      .pipe(tap());
  }

  confirmarRetirada(id: string): Observable<any> {
    const data = {
        _id: id
    }
    return this._httpClient
      .post(`${environment.apiProd}/pedidos/retirada`, data, httpOptions)
      .pipe(tap());
  }

  ConsultarPedidosRetirada(): Observable<any> {
    return this._httpClient
      .get(`${environment.apiProd}/pedidos/retirada`, httpOptions)
      .pipe(tap());
  }
}
