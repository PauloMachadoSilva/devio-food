import { Route } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CozinhaComponent } from './pages/cozinha/cozinha.component';
import { RetiradaComponent } from './pages/retirada/retirada.component';

export const appRoutes: Route[] = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'pedido', component: HomeComponent },
    {path: 'cozinha', component: CozinhaComponent },
    {path: 'retirada', component: RetiradaComponent },
];
