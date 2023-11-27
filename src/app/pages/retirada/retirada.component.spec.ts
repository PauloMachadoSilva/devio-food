/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RetiradaComponent } from './retirada.component';

describe('RetiradaComponent', () => {
  let component: RetiradaComponent;
  let fixture: ComponentFixture<RetiradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RetiradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetiradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
