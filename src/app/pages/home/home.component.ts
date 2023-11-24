import { Component, OnInit } from '@angular/core';
import { MenuModule } from 'src/app/shared/components/menu/menu.module';
import {MatButtonModule} from '@angular/material/button';
import { SectionModule } from 'src/app/shared/components/section/section.module';
@Component({
  selector: 'devio-food-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    MenuModule,
    SectionModule,
    MatButtonModule
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('init')
  }
}
