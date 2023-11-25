import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { TipoCard } from 'src/app/enums/card.enum';
import { ICard } from 'src/app/interfaces/card';
import { register } from 'swiper/element/bundle';

register();


@Component({
  selector: 'devio-food-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CardComponent implements OnInit {
  @Input() descricao= '';
  @Input() tipoCard!: TipoCard;
  @Input() cards!: ICard[];
  @Output() selecionado = new EventEmitter<ICard>();
  cardsecao!: ICard[]; 
  tipoCards = TipoCard;

  constructor() { }

  ngOnInit() {
    console.log('card tipo:', this.tipoCard)
    console.log('card:', this.cards)
    this.cardsecao = this.cards.filter(x => x.tipo === this.tipoCard)
  }

  onClickProduto(card : ICard) {
    console.log(card);
    this.selecionado.emit(card);
  }

}
