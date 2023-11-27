import { HttpClient, HttpClientModule } from '@angular/common/http';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SecoesService } from './secoes.service';

describe('Service: Produtos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        SecoesService,
        HttpClient
      ]
    });
  });

  it('should ...', inject([SecoesService], (service: SecoesService) => {
    expect(service).toBeTruthy();
  }));
});
