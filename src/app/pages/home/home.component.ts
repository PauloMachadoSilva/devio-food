import { MatIconModule } from '@angular/material/icon';
import { Component, OnInit } from '@angular/core';
import { MenuModule } from '../../shared/components/menu/menu.module';
import {MatButtonModule} from '@angular/material/button';
import { SectionModule } from '../../shared/components/section/section.module';
import { TipoCard } from '../../enums/card.enum';
import { SearchComponent } from '../../shared/components/search/search.component';
import { MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { catchError, retry } from 'rxjs';
import { SecoesService } from '../../services/secoes/secoes.service';
import { ICard } from '../../interfaces/card';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProdutosService } from '../../services/produtos/produtos.service';
import { CarrinhoComprasService } from '../../services/carrinho-compras/carrinho-compras.service';
import { ICarrinhoCompras } from '../../interfaces/carrinho-compras';
import { PedidosService } from '../../services/pedidos/pedidos.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogSucessoComponent } from '../../shared/components/dialog-sucesso/dialog-sucesso.component';
@Component({
  selector: 'devio-food-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MenuModule,
    SectionModule,
    SearchComponent,
    MatButtonModule,
    MatIconModule,
    HttpClientModule

  ],
  providers: [
    MatBottomSheet,
    HttpClient,
    SecoesService,
    ProdutosService,
    CarrinhoComprasService
  ],
})
export class HomeComponent implements OnInit {

  categorias = 'Navegue por categoria'
  produtos = 'Selecione um produto para adicionar ao seu pedido'
  tipoCard = TipoCard;
  showSecoes = false;
  showProdutos = false;
  secoes!: ICard[];
  svcProdutos!: ICard[]
  carrinhoCompra!: ICarrinhoCompras; 


  constructor(
    private _bottomSheet: MatBottomSheet,
    public _secoesService: SecoesService,
    public _produtosService: ProdutosService,
    private _carrinhoCompra: CarrinhoComprasService,

  ) { }

  ngOnInit() {
    this.consutarSecoes();
    this.consultaTodosProdutos();
    this.obterDadosCarrinho();

  }

  openBottomSheet() {
    let sheet = this._bottomSheet.open(SheetComponent, {

    });
    sheet.afterDismissed().subscribe(x => {
      if (!x) {
        this.obterDadosCarrinho();  
      }
    });
  }

  obterDadosCarrinho(carrinho?:ICarrinhoCompras) {
    if(carrinho) {
      this.openBottomSheet();
    }
    this.carrinhoCompra = this._carrinhoCompra.obterCarrinhoCompras;

  }

  consultarProduto(item:string) {
    if(item) {
      this.showProdutos = false;
      this._produtosService
        .consultarProduto(item)
        .pipe(
          retry(3),
          catchError((err) => {
            console.log(err);
            return err;
          }))
        .subscribe((svc:any) => {
          this.showProdutos = true;
          this.showSecoes = false;
          this.svcProdutos = svc ? svc : null
        });
      }
      else {
        this.showSecoes = true;
        this.consultaTodosProdutos()
      }
  }

  consultaTodosProdutos() {
    this.showProdutos = false;
    this._produtosService
      .consultarProdutos()
      .pipe(
        retry(3),
        catchError((err) => {
          console.log(err);
          return err;
        }))
      .subscribe((svc:any) => {
        this.showProdutos = true;
        this.svcProdutos = svc ? svc : null
      });
  }

  consutarSecoes() {
    this._secoesService
      .consultaSecoes()
      .pipe(
        retry(3),
        catchError((err) => {
          console.log(err);
          return err;
        }))
      .subscribe((svc:any) => {
        this.showSecoes = true;
        this.secoes = svc ? svc : null
      });
  }
}
  @Component({
    selector: 'devio-food-pedido-sheet',
    templateUrl: 'pedido-sheet.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [
      CommonModule,
      MatButtonModule,
      MatListModule,
      FormsModule, 
      MatFormFieldModule, 
      MatInputModule,
      MatIconModule,
      HttpClientModule
    ],
    providers: [
      CarrinhoComprasService,
      PedidosService,
      HttpClient
    ],
  })

  export class SheetComponent implements OnInit {
    formDuvidas!: FormGroup;
    loginError = false;
    sucesso = false;
    btnSuesso = false;
    isFinalizar = false;
    btnFinalizar = 'Finalizar pedido'
    tipoPagamento = [
      {tipo:'Débito', icon:'credit_card'}, 
      {tipo: 'Crédito', icon: 'credit_card'}, 
      {tipo: 'Dinheiro', icon: 'payments'}
    ];
    carrinhoCompra!: any;

    constructor(
      private _bottomSheetRef: MatBottomSheetRef<HomeComponent>,
      private formBuilder: FormBuilder,
      private _carrinhoCompra: CarrinhoComprasService,
      private _pedido: PedidosService,
      public dialog: MatDialog,

    ) {}
  
    ngOnInit(): void {
      this.criarForm();
      this.obterDadosCarrinho();
    }
  
    openLink(event: MouseEvent): void {
      this._bottomSheetRef.dismiss();
      event.preventDefault();
    }

    obterDadosCarrinho() {
      this.carrinhoCompra = this._carrinhoCompra.obterCarrinhoCompras
    }

    fecharDialog(): void {
      this._bottomSheetRef.dismiss();
      localStorage.clear();
    }

    finalizarCompra(): void {
      if (this.isFinalizar) {
        this._pedido.adicionarPedido(this.carrinhoCompra)
        .subscribe((svc:any) => {
          this.modalSucesso();
          localStorage.clear();
        });
      }
      else {
        this.isFinalizar = true;
        this.btnFinalizar = 'Confimar'
      }
    }

    modalSucesso() {
      const dialogRef = this.dialog.open(DialogSucessoComponent, {
        width: '95%',
        height: '95%',
        maxWidth:'100%',
        maxHeight:'100%',
        enterAnimationDuration: '0ms'
      });
    
      dialogRef.afterClosed().subscribe(result => {
        this.carrinhoCompra = null;
      });
    }
  
    criarForm() {
      this.formDuvidas = this.formBuilder.group({
        nome: ['', [Validators.required, Validators.minLength(5)]],
        celular: ['', [Validators.required, Validators.minLength(5)]],
        email: new FormControl(null, [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ]),
        duvida: ['', [Validators.required, Validators.minLength(5)]],
      });
    }

    enviarCampos(): any {
      const dadosForms: any = this.formDuvidas.value;
      return dadosForms
    }
  
}
