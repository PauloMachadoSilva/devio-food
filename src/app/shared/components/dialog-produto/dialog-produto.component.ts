import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InputNumberDirective } from '../../../directives/input-number.directive';
import { ICard } from '../../../interfaces/card';
import { CarrinhoComprasService } from '../../../services/carrinho-compras/carrinho-compras.service';
import { ICarrinhoCompras } from '../../../interfaces/carrinho-compras';

@Component({
  selector: 'devio-food-dialog-produto',
  templateUrl: './dialog-produto.component.html',
  styleUrls: ['./dialog-produto.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule, 
    MatIconModule, 
    MatButtonModule, 
    MatListModule,
    MatInputModule,
    FormsModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    InputNumberDirective
  ],
  providers: [
    CarrinhoComprasService,

  ]
})
export class DialogProdutoComponent implements OnInit {

  item!: ICard;
  valorTotal = 0;
  qtdeTotal = 0;
  produto!: ICarrinhoCompras;
  produtoMais!: ICarrinhoCompras;
  arrayItems: ICard[] = [];
  formProduto!: FormGroup;


  adicionais = [
    {nome:'Bacon',sub: '10g', img:'bacon.png',valor: 1 }, 
    {nome: 'Cheddar',sub: '10g', img: 'cheddar.png', valor: 1}, 
    {nome: 'Molho',sub: 'Barbecue', img: 'molho.png', valor: 1}
  ];

  constructor(
    public dialogRef: MatDialogRef<DialogProdutoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public _carrinhoService: CarrinhoComprasService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.item = this.data.item
    this.criarForm();
  }

  closeDialog(carrinho?: string): void {
    this.dialogRef.close(carrinho);
  }

  adicionarCarrinhoFinalizar() {
    if(this.formProduto.valid && this.qtdeTotal > 0) {
      const formProduto: any = this.formProduto.value;
      const carrinhoAnterior = this._carrinhoService.obterCarrinhoCompras;
      const carrinhoMais = this.tratarCarrinho(carrinhoAnterior)
      carrinhoMais.observacao = formProduto.observacoes;
      //pegar carrinho anterior e somar 
      if(this.item) {
        this._carrinhoService.criarCarrinho(carrinhoMais)
        this.closeDialog('aberto');
      }
    }
  }

  adicionarCarrinhoMais() {
    if(this.formProduto.valid && this.qtdeTotal > 0) {
      const carrinhoAnterior = this._carrinhoService.obterCarrinhoCompras;
      const carrinhoMais = this.tratarCarrinho(carrinhoAnterior)
      //pegar carrinho anterior e somar 
      if(this.item) {
        this._carrinhoService.criarCarrinho(carrinhoMais)
        this.closeDialog();
      }
    }
  }

  tratarCarrinho(carrinhoAnterior:ICarrinhoCompras) : ICarrinhoCompras {
    
    const arrayItems: ICard[] = [];
    arrayItems.push(this.item)
    let anterior:any; 
    if (carrinhoAnterior) {
      anterior = carrinhoAnterior
      for (let produto of this.produto.items) {
        anterior.items.push(produto)
      }
    }
    else {
      anterior = this.produto
    }
    this.produtoMais = {
      nome : '',
      items: anterior.items ,
      total: carrinhoAnterior ? carrinhoAnterior.total + this.produto.total : this.produto.total ,
      quantidade: carrinhoAnterior? carrinhoAnterior.quantidade + this.produto.quantidade : this.produto.quantidade,
      titulo: '',
      observacao: ''
    };

    return this.produtoMais
  }

  getValorProduto(quantidade: string) {
    const arrayItems: ICard[] = [];

    for (let i = 0; i < Number(quantidade); i++){
      arrayItems.push(this.item)
     }
    //Atualizar valores do novo Array
    const itemQtde = Number(quantidade);
    const itemPreco = Number(itemQtde * (this.item.preco as number))

    this.produto = {
      nome : '',
      items: arrayItems,
      total: itemPreco,
      quantidade: itemQtde,
      titulo: '',
      observacao: ''
    };
    this.valorTotal = itemPreco;
    this.qtdeTotal = itemQtde;
  }

  criarForm() {
    this.formProduto = this.formBuilder.group({
      observacoes: ['', []],
      tipoPagamento: ['', [Validators.required, Validators.minLength(1)]],
    });
  }
}
