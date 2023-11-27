/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CozinhaComponent } from './cozinha.component';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('CozinhaComponent', () => {
  let component: CozinhaComponent;
  let fixture: ComponentFixture<CozinhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CozinhaComponent],
      providers: [
        provideAnimations()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CozinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
