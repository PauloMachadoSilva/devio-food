import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'devio-food-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() titulo= '';

  constructor() { }

  ngOnInit() {
  }

}
