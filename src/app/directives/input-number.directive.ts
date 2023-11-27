import { Directive, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';

let val =0;

@Directive({
  selector: '[devioFoodInputNumber]',
  standalone: true
})
export class InputNumberDirective implements AfterViewInit {

@Output() valorCampo = new EventEmitter<string>();

  element: HTMLInputElement
  private inputNumber: number;

  constructor(
    protected _elementRef: ElementRef<HTMLInputElement>) 
    {
      this.element = _elementRef.nativeElement;
      this.inputNumber = val++;
     }
ngAfterViewInit(): void {
  const min = this.createElement('-','button-right');
  min.setAttribute('id',`inputDirective-${this.inputNumber}`);
  min.setAttribute('style',`width:35px;height:34px;background-color: #00549c;
  color: #fff;
  border: 0;
  border-radius: 20px 20px 20px 20px;
  cursor:pointer;
  left: 15px;
  cursor: pointer;
  position: relative;
  `);
  min.addEventListener('click',()=>{
    this.element.stepDown();
    this.valorCampo.emit(this.element.value)
  });
  const plus = this.createElement('+','button-left');
  plus.setAttribute('id',`inputDirective-${this.inputNumber}`);
  plus.setAttribute('style',`width:35px;height:34px;background-color: #00549c;
  color: #fff;
  border: 0;
  border-radius: 20px 20px 20px 20px;
  cursor:pointer;
  right: 15px;
  cursor: pointer;
  position: relative;
  `);
  plus.addEventListener('click',()=>{
    this.element.stepUp();
    this.valorCampo.emit(this.element.value)

  });
  this.element.before(min);
  this.element.after(plus);
}

private createElement(text: string, className: string):HTMLButtonElement{
  const myButton = document.createElement('button');
  myButton.className = `${className}`;
  myButton.innerText = text;
  return myButton;
}

}
