import http from '../utils/http';
import Atendimento from "../models/atendimento";

export async function listar(): Promise<Atendimento[]> {
    return await http.get<Atendimento[]>('/atendimento').then(response => response.data as Atendimento[]);
}

export async function buscarPorId(id: number): Promise<Atendimento> {
    return await http.get<Atendimento>(`/atendimento/${id}`).then(response => response.data as Atendimento);
}

export async function criar(atendimento: Atendimento): Promise<Atendimento> {
    return await http.post<Atendimento>('/atendimento', atendimento) as Atendimento;
}

export async function atualizar(atendimento: Atendimento): Promise<Atendimento> {
    return await http.put(`/atendimento/${atendimento.id}`, atendimento) as Atendimento;
}

export async function deletar(id: string) {
    http.delete(`/atendimento/${id}`);
}
