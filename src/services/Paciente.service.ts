import Paciente from "../models/paciente";
import http from "../utils/http";


export async function listar(): Promise<Paciente[]> {
    return await http.get<Paciente[]>('/paciente').then(response => response.data as Paciente[]);
}

export async function buscarPorId(id: string): Promise<Paciente> {
    return await http.get<Paciente>(`/paciente/${id}`).then(response => response.data as Paciente);
}

export async function criar(paciente: Paciente): Promise<Paciente> {
    return await http.post(`/paciente`, paciente).then(response => response.data as Paciente);
}

export async function atualizar(paciente: Paciente): Promise<Paciente> {
    return await http.put(`/paciente/${paciente.id}`, paciente).then(response => response.data as Paciente);
}

export async function deletar(id: string) {
    http.delete(`/paciente/${id}`);
}
