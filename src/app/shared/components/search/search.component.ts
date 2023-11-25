import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'devio-food-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
