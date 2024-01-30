import http from '../utils/http';
import Assinador from "../models/assinador";

export async function listar(): Promise<Assinador[]> {
    return await http.get<Assinador[]>('/assinador').then(response => response.data as Assinador[]);
}

export async function buscarPorId(id: number): Promise<Assinador> {
    return await http.get<Assinador>(`/assinador/${id}`).then(response => response.data as Assinador);
}

export async function criar(assinador: Assinador): Promise<Assinador> {
    return await http.post<Assinador>('/assinador', assinador) as Assinador;
}

export async function atualizar(assinador: Assinador): Promise<Assinador> {
    return await http.put(`/assinador/${assinador.id}`, assinador) as Assinador;
}

export async function deletar(id: string) {
    http.delete(`/assinador/${id}`);
}
