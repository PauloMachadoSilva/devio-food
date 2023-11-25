import { Component, OnInit } from '@angular/core';
import { MenuModule } from 'src/app/shared/components/menu/menu.module';

@Component({
  selector: 'devio-food-retirada',
  templateUrl: './retirada.component.html',
  styleUrls: ['./retirada.component.scss'],
  standalone: true,
  imports: [
    MenuModule
  ]
})
export class RetiradaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
