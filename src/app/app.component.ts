import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuModule } from './shared/components/menu/menu.module';
import { SectionModule } from './shared/components/section/section.module';
import { CardComponent } from './shared/components/card/card.component';
@Component({
  standalone: true,
  imports: [RouterModule, HomeComponent, MenuModule, SectionModule],
  selector: 'devio-food-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'devio-food';
}
