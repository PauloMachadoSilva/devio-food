import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { TipoCard } from '../../../enums/card.enum';
import { ICard } from '../../../interfaces/card';
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
  @Input() cards!: ICard[] | null;
  @Output() selecionado = new EventEmitter<ICard>();
  cardSecao!: ICard[]; 
  tipoCards = TipoCard;

  constructor() { }

  ngOnInit() {
    this.cardSecao = this.cards!.filter(x => x.tipo === this.tipoCard)
  }

  onClickProduto(card : ICard) {
    this.selecionado.emit(card);
  }

}
