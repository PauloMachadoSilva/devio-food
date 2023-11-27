import { TipoCard } from "../enums/card.enum";

export interface ICard {
    titulo: string;
    codigo: string;
    imagem?: string;
    subTitulo?: string;
    preco?: number
    quantidade?: number
    tipo: string
}
  
