import { HttpClient, HttpClientModule } from '@angular/common/http';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProdutosService } from '../produtos/produtos.service';

describe('Service: Produtos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            HttpClientModule
        ],
      providers: [
        ProdutosService,
        HttpClient
    ]
    });
  });

  it('should ...', inject([ProdutosService], (service: ProdutosService) => {
    expect(service).toBeTruthy();
  }));
});
