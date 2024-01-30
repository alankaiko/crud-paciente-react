import http from '../utils/http';
import Medico from "../models/medico";

export async function listar(): Promise<Medico[]> {
    return await http.get<Medico[]>('/medico').then(response => response.data as Medico[]);
}

export async function buscarPorId(id: number): Promise<Medico> {
    return await http.get<Medico>(`/medico/${id}`).then(response => response.data as Medico);
}

export async function criar(medico: Medico): Promise<Medico> {
    return await http.post<Medico>('/medico', medico) as Medico;
}

export async function atualizar(medico: Medico): Promise<Medico> {
    return await http.put(`/medico/${medico.id}`, medico) as Medico;
}

export async function deletar(id: string) {
    http.delete(`/medico/${id}`);
}
