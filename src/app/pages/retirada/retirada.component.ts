import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { catchError, retry } from 'rxjs';
import { IPedidos } from '../../interfaces/pedidos';
import { PedidosService } from '../../services/pedidos/pedidos.service';
import { MenuModule } from '../../shared/components/menu/menu.module';

@Component({
  selector: 'devio-food-retirada',
  templateUrl: './retirada.component.html',
  styleUrls: ['./retirada.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MenuModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [
    PedidosService,
  ]
})
export class RetiradaComponent implements OnInit {

  pedidos!: IPedidos[];
  pedidosProntos!: IPedidos[];

  constructor(
    private _pedido: PedidosService,
  ) { }

  ngOnInit() {
    this.consultarPedidos();
    this.consultarPedidosProntos();
  }

  consultarPedidos() {
    this._pedido
    .consultarPedidos('pedido')
    .pipe(
      retry(3),
      catchError((err) => {
        console.log(err);
        return err;
      }))
    .subscribe((svc:any) => {
      // this.showSecoes = true;
      this.pedidos = svc ? svc : null
    });
  }

  consultarPedidosProntos() {
    this._pedido
    .consultarPedidos('pronto')
    .pipe(
      retry(3),
      catchError((err) => {
        console.log(err);
        return err;
      }))
    .subscribe((svc:any) => {
      this.pedidosProntos = svc ? svc : null
    });
  }

  confimarPedido(id: any) {
    this._pedido
    .confirmarPedido(id)
    .pipe(
      retry(3),
      catchError((err) => {
        console.log(err);
        return err;
      }))
    .subscribe((svc:any) => {
      this.pedidos = svc ? svc : null
    });
  }

  recusarPedido(id: any) {
    this._pedido
    .recusarPedido(id)
    .pipe(
      retry(3),
      catchError((err) => {
        console.log(err);
        return err;
      }))
    .subscribe((svc:any) => {
    });
  }

  retornarPedido(id: any) {
    this._pedido
    .retornarPedido(id)
    .pipe(
      retry(3),
      catchError((err) => {
        console.log(err);
        return err;
      }))
    .subscribe((svc:any) => {
    });
  }

  confimarRetirada(id: any) {
    this._pedido
    .recusarPedido(id)
    .pipe(
      retry(3),
      catchError((err) => {
        console.log(err);
        return err;
      }))
    .subscribe((svc:any) => {
    });
  }

}
