import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'devio-food-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  @Input() onMenu = false;
  @ViewChild('mySidepanel') mySidepanel: ElementRef<HTMLDivElement> = {} as ElementRef;;
  @ViewChild('divElements') divElements: ElementRef<HTMLDivElement> = {} as ElementRef;;
  @ViewChild('itemColor') itemColor: ElementRef<HTMLSpanElement> = {} as ElementRef;;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    console.log('menu');
  }

  openNav() {
    this.mySidepanel.nativeElement.style.width = '280px'    
  }

  closeNav() {
    this.mySidepanel.nativeElement.style.width = '0'
    // this.divElements.nativeElement.style.display = 'none'
  }

  goHome() {
    this.router.navigate(['/pedido']);
  }

  goCozinha() {
    this.router.navigate(['/cozinha']);
  }

  goRetirada() {
    this.router.navigate(['/retirada']);
  }
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

}
