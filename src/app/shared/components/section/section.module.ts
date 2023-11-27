import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';
import { CardComponent } from '../card/card.component';
import { SecoesService } from '../../../services/secoes/secoes.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CarrinhoComprasService } from '../../../services/carrinho-compras/carrinho-compras.service';

@NgModule({
  imports: [
    CommonModule,
    CardComponent
  ],
  exports: [
    SectionComponent
  ],
  declarations: [SectionComponent],
  providers: [
    HttpClient,
    SecoesService,
    CarrinhoComprasService
  ]
})
export class SectionModule { }
