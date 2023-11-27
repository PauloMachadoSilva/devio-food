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
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';


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
    public dialogs: MatDialog,
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
      this.dialog('Pedido pronto!')
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
      .subscribe(()=>
      this.dialog('Pedido recusado pelo cliente!')
    );
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
      .subscribe(()=>
      this.dialog('Pedido enviado para preparo!')
    );
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
    .subscribe(()=>
      this.dialog('Pedido cancelado!')
    );
  }

  dialog(texto:string) {
    const data = {
      titulo: 'Aviso!',
      corpo: '',
      item: texto
    }
    const dialogRef = this.dialogs.open(DialogComponent, {
      width: '70%',
      height: '30%',
      maxWidth:'100%',
      maxHeight:'100%',
      data: data,
      enterAnimationDuration: '0ms'
    });

    dialogRef.afterClosed().subscribe(result => {
      window.location.reload();
    });

  }

}
