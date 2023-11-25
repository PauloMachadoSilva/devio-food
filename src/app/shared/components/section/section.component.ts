import { Component, Input, OnInit } from '@angular/core';
import { TipoCard } from 'src/app/enums/card.enum';
import { ICard } from 'src/app/interfaces/card';

@Component({
  selector: 'devio-food-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() titulo= '';
  @Input() subTitulo= '';
  @Input() tipo!: TipoCard;

  card: ICard[] = [
    {titulo: 'Smash da casa', imagem:'smash.jpeg', subTitulo: '2x hamburger 200g', preco: 30, tipo:'Produtos'},
    {titulo: 'Smash da casa', imagem:'smash.jpeg', subTitulo: '2x hamburger 200g', preco: 30, tipo:'Produtos'},
    {titulo: 'Smash da casa', imagem:'smash.jpeg', subTitulo: '2x hamburger 200g', preco: 30, tipo:'Produtos'},
    {titulo: 'Smash da casa', imagem:'smash.jpeg', subTitulo: '2x hamburger 200g', preco: 30, tipo:'Produtos'},
    {titulo: 'Smash da casa', imagem:'smash.jpeg', subTitulo: '2x hamburger 200g', preco: 30, tipo:'Produtos'},
    {titulo: 'Smash da casa', imagem:'smash.jpeg', subTitulo: '2x hamburger 200g', preco: 30, tipo:'Produtos'},
    {titulo: 'Smash da casa', imagem:'smash.jpeg', subTitulo: '2x hamburger 200g', preco: 30, tipo:'Produtos'},
    {titulo: 'Smash da casa', imagem:'smash.jpeg', subTitulo: '2x hamburger 200g', preco: 30, tipo:'Produtos'},
    {titulo: 'Combos', imagem:'combo.png', subTitulo: '', preco: 0, tipo:'Categorias'},
    {titulo: 'Acompanhamentos', imagem:'acomp.png', subTitulo: '', preco: 0, tipo:'Categorias'},
    {titulo: 'Bebidas', imagem:'bebidas.png', subTitulo: '', preco: 0, tipo:'Categorias'},
    {titulo: 'Sobremesas', imagem:'sobremesa.png',  subTitulo: '', preco: 0, tipo:'Categorias'}
  ]

  constructor() { }

  ngOnInit() {
    console.log('Tipo',this.tipo)
  }

}
