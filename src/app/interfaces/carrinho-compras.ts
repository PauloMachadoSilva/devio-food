import { ICard } from "./card";

export interface ICarrinhoCompras {
    titulo: string;
    total: number;
    quantidade: number;
    items: ICard[]
    nome?:string;
    observacao?:string;
    }