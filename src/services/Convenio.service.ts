import http from "../utils/http";
import Convenio from "../models/convenio";

export async function listar(): Promise<Convenio[]> {
    return await http.get<Convenio[]>('/convenio').then(response => response.data as Convenio[]);
}

export async function buscarPorId(id: number): Promise<Convenio> {
    return await http.get(`/convenio/${id}`).then(response => response.data as Convenio);
}

export async function criar(convenio: Convenio): Promise<Convenio> {
    return await http.post<Convenio>('/convenio', convenio) as Convenio;
}

export async function atualizar(convenio: Convenio): Promise<Convenio> {
    return await http.put(`/convenio/${convenio.id}`, convenio) as Convenio;
}

export async function deletar(id: string) {
    http.delete(`/convenio/${id}`);
}
