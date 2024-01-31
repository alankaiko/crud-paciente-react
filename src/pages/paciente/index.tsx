import Link from "next/link";
import Table from "../../shareds/Table/index";
import {Cabecalho} from "../../utils/itens-tabela/cabecalho";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import * as PacienteService from "../../services/Paciente.service";
import Swal from "sweetalert2";
import Paciente from "../../models/paciente";

const cabecalho: Cabecalho[] = [
    {chave: 'id', valor: '#'},
    {chave: 'nome', valor: 'Nome'}
]

export default function ListaPaciente() {
    const router = useRouter();
    const [pacientes, setPacientes] = useState<Paciente[]>([]);

    useEffect(() => {
        carregarPacientes();
    }, [])

    async function carregarPacientes() {
        await PacienteService.listar().then(response => setPacientes(response) as Paciente[]);
    }

    const editarPaciente = (paciente: Paciente) => {
        router.push(`/paciente/editar/${paciente.id}`);
    }

    const deletarPaciente = (paciente: Paciente) => {
        Swal.fire({
            title: 'Deseja excluir?',
            text: "Esta ação não pode ser revertida!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#09f',
            cancelButtonColor: '#d33',
            confirmButtonText: `Sim, Excluir ${paciente.nome}!`
        })
            .then(({value}) => value && deletar(paciente.id))
    }

    async function deletar(id: string) {
        PacienteService.deletar(id).then(() => {
            Swal.fire('Uhul!', 'Paciente deletado', 'success');
            carregarPacientes();
        })
    }

    return (
        <>
            <div className="flex flex-col">
                <Link href="/paciente/cadastrar">
                    <span>Novo Paciente</span>
                </Link>

                <Link href="/">
                    <span>Tela inicial</span>
                </Link>
            </div>

            <Table cabecalho={cabecalho}
                   dados={pacientes}
                   editar={editarPaciente}
                   deletar={deletarPaciente}
                   acoes
            />
        </>
    )
}
