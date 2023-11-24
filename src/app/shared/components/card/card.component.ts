import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { register } from 'swiper/element/bundle';

register();


@Component({
  selector: 'devio-food-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [
    MatCardModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CardComponent implements OnInit {
  @Input() descricao= '';
  constructor() { }

  ngOnInit() {
  }

}
