import { ICard } from "./card";

export interface IPedidos {
    _id?: string,
    codigo?: number;
    titulo: string;
    total: number;
    quantidade: number;
    items: ICard[]
    nome?:string;
    observacao?:string;
    status?: string;
    tipoPagamento?:string;
    valorPago?:number;
    troco?:number;
    }