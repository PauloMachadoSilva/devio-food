import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';
import { CardComponent } from '../card/card.component';

@NgModule({
  imports: [
    CardComponent
  ],
  exports: [
    SectionComponent
  ],
  declarations: [SectionComponent]
})
export class SectionModule { }
