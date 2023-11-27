import { ICard } from "./card";

export interface ICarrinhoCompras {
    codigo?: number;
    titulo: string;
    total: number;
    quantidade: number;
    items: ICard[]
    nome?:string;
    tipoPagamento?:string;
    valorPago?:number;
    troco?:number;
    observacao?:string;

    }