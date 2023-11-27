import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { Component, OnInit } from '@angular/core';
import { MenuModule } from '../../shared/components/menu/menu.module';
import { HttpClientModule } from '@angular/common/http';
import { PedidosService } from '../../services/pedidos/pedidos.service';
import { catchError, retry } from 'rxjs';
import { IPedidos } from '../../interfaces/pedidos';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'devio-food-cozinha',
  templateUrl: './cozinha.component.html',
  styleUrls: ['./cozinha.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MenuModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [
    PedidosService,
  ]
})
export class CozinhaComponent implements OnInit {
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
    .subscribe();
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
    .subscribe();
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
    .subscribe();
  }

}
