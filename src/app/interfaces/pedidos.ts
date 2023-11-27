import { ICard } from "./card";

export interface IPedidos {
    _id?: string,
    titulo: string;
    total: number;
    quantidade: number;
    items: ICard[]
    nome?:string;
    observacao?:string;
    status?: string;
    }