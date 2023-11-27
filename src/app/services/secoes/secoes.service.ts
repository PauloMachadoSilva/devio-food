import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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
export class SecoesService {
  constructor(private _httpClient: HttpClient, private router: Router) {}

  /**
   * Consultando Servicos na Servidor, retornando JSON Ge
   * @author Paulo Eduardo
   */
  consultaSecoes() {
    return this._httpClient.get(`${environment.apiLocal}/secoes`, httpOptions);
  }
}
