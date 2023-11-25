import { TipoCard } from "../enums/card.enum";

export interface ICard {
    titulo: string;
    imagem?: string;
    subTitulo?: string;
    preco?: number
    tipo: string
}
  
