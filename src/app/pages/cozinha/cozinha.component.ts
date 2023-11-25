import { Component, OnInit } from '@angular/core';
import { MenuModule } from 'src/app/shared/components/menu/menu.module';

@Component({
  selector: 'devio-food-cozinha',
  templateUrl: './cozinha.component.html',
  styleUrls: ['./cozinha.component.scss'],
  standalone: true,
  imports: [
    MenuModule
  ]
})
export class CozinhaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
