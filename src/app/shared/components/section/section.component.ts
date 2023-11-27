import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TipoCard } from '../../../enums/card.enum';
import { ICard } from '../../../interfaces/card';
import { DialogProdutoComponent } from '../dialog-produto/dialog-produto.component';
import { CarrinhoComprasService } from '../../../services/carrinho-compras/carrinho-compras.service';
import { ICarrinhoCompras } from '../../../interfaces/carrinho-compras';

@Component({
  selector: 'devio-food-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {
  @Input() titulo= '';
  @Input() subTitulo= '';
  @Input() tipo!: TipoCard;
  @Input() secao!: ICard;
  @Input() section!: ICard[];
  @Output() carrinho = new EventEmitter<ICarrinhoCompras>();
  showSecoes = false

  constructor(
    public dialog: MatDialog,
    public _carrinhoService: CarrinhoComprasService,
  ) {
   }

  selecionarProduto(item:ICard) {
    const data = {
      titulo: 'Revise seu pedido!',
      corpo: '',
      item: item
    }
    // this.dialogRef.close();
    const dialogRef = this.dialog.open(DialogProdutoComponent, {
      width: '95%',
      height: '95%',
      maxWidth:'100%',
      maxHeight:'100%',
      data: data,
      enterAnimationDuration: '0ms'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      this.carrinho.emit(result);
    });
  }

  itemSelecionado(item: ICard){
    if(item.tipo === TipoCard.PRODUTOS)
      this.selecionarProduto(item)
    
    else {
      //Executar consulta por categoria
      //TODO
    }
  }

}
