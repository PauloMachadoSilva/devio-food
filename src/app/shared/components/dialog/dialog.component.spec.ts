import { HttpClient } from '@angular/common/http';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DialogComponent } from './dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

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
      imports: [DialogComponent],
      providers: [
        {provide: MatDialogRef, useValue:{}},
        {provide: MAT_DIALOG_DATA, useValue: data},
        provideAnimations()      
      ],      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
