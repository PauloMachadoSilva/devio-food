import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuModule } from './shared/components/menu/menu.module';
import { SectionModule } from './shared/components/section/section.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterModule, MenuModule, SectionModule],
  selector: 'devio-food-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'devio-food';
}
