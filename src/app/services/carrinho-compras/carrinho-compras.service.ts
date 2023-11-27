import { Injectable } from '@angular/core';
import { ICarrinhoCompras } from '../../interfaces/carrinho-compras';

@Injectable()
export class CarrinhoComprasService {
  constructor() {}

  criarCarrinho(dados: ICarrinhoCompras) {
    //Criando carrinho
    const carrinho: ICarrinhoCompras = {
      total: dados.total,
      quantidade: dados.quantidade,
      items: dados.items,
      titulo: dados.titulo,
      nome: dados.nome,
      observacao: dados.observacao,
    };

    localStorage.setItem('carrinho-compras', JSON.stringify(carrinho));
    return true;
  }

  removerCarrinho() {
    localStorage.clear();
  }

  get obterCarrinhoCompras(): ICarrinhoCompras {
    const carrinhoCompras: string = localStorage.getItem('carrinho-compras')
      ? localStorage.getItem('carrinho-compras')!
      : '';
    return Object.keys(carrinhoCompras).length > 0
      ? JSON.parse(carrinhoCompras)
      : null;
  }
}
