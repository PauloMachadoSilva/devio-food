/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CarrinhoComprasService } from './carrinho-compras.service';

describe('Service: CarrinhoCompras', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarrinhoComprasService]
    });
  });

  it('should ...', inject([CarrinhoComprasService], (service: CarrinhoComprasService) => {
    expect(service).toBeTruthy();
  }));
});
