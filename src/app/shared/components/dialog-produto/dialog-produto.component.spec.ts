import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogProdutoComponent } from './dialog-produto.component';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('DialogProdutoComponent', () => {
  let component: DialogProdutoComponent;
  let fixture: ComponentFixture<DialogProdutoComponent>;
  const data = {
    corpo: "",
    item : { 
      imagem: "smash.jpeg",
      preco: 30,
      subTitulo: "2x hamburger 200g",
      tipo: "Produtos",
      titulo: "Smash da casa"
    },
    titulo: "Revise seu pedido!"
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DialogProdutoComponent],
      providers: [
        {provide: MatDialogRef, useValue:{}},
        {provide: MAT_DIALOG_DATA, useValue: data},
        provideAnimations()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogProdutoComponent);
    component = fixture.componentInstance;
    component.item =
    {codigo:'', titulo: 'Smash da casa', imagem:'smash.jpeg', subTitulo: '2x hamburger 200g', preco: 30, tipo:'Produtos'}
    component.adicionais = [
      {nome:'Bacon',sub: '10g', img:'bacon.png',valor: 1 }, 
      {nome: 'Cheddar',sub: '10g', img: 'cheddar.png', valor: 1}, 
      {nome: 'Molho',sub: 'Barbecue', img: 'molho.png', valor: 1}
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
