import { MatIconModule } from '@angular/material/icon';
import { Component, OnInit } from '@angular/core';
import { MenuModule } from 'src/app/shared/components/menu/menu.module';
import {MatButtonModule} from '@angular/material/button';
import { SectionModule } from 'src/app/shared/components/section/section.module';
import { TipoCard } from 'src/app/enums/card.enum';
import { SearchComponent } from 'src/app/shared/components/search/search.component';
import { MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'devio-food-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    MenuModule,
    SectionModule,
    SearchComponent,
    MatButtonModule,
    MatIconModule
  ],
  providers: [MatBottomSheet],
})
export class HomeComponent implements OnInit {

  categorias = 'Navegue por categoria'
  produtos = 'Selecione um produto para adicionar ao seu pedido'
  tipoCard = TipoCard;

  constructor(
    private _bottomSheet: MatBottomSheet

  ) { }

  ngOnInit() {
    console.log('init')
  }
  openBottomSheet() {
    this._bottomSheet.open(SheetComponent);
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
      MatListModule
   
    ],
  })
  export class SheetComponent implements OnInit {
    formDuvidas!: FormGroup;
    loginError = false;
    sucesso = false;
    btnSuesso = false;
    constructor(
      private _bottomSheetRef: MatBottomSheetRef<HomeComponent>,
      private formBuilder: FormBuilder,
    ) {}
  
    ngOnInit(): void {
      this.criarForm();
    }
  
    openLink(event: MouseEvent): void {
      this._bottomSheetRef.dismiss();
      event.preventDefault();
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
