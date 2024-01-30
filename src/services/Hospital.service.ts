import Hospital from "../models/hospital";
import http from "../utils/http";


export async function listar(): Promise<Hospital[]> {
    return await http.get<Hospital[]>('/hospital').then(response => response.data as Hospital[]);
}


export async function buscarPorId(id: string): Promise<Hospital> {
    return await http.get<Hospital>(`/hospital/${id}`).then(response => response.data as Hospital);
}

export async function criar(hospital: Hospital): Promise<Hospital> {
    return await http.post<Hospital>('/hospital', hospital) as Hospital;
}

export async function atualizar(hospital: Hospital): Promise<Hospital> {
    return await http.put(`/hospital/${hospital.id}`, hospital) as Hospital;
}

export async function deletar(id: string) {
    http.delete(`/hospital/${id}`);
}






