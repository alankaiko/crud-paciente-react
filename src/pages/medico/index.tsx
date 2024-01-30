import Link from "next/link";
import Table from "../../shareds/Table/index";
import {Cabecalho} from "../../utils/itens-tabela/cabecalho";
import {useEffect, useState} from "react";
import Medico from "../../models/medico";
import * as MedicoService from '/src/services/Medico.service';
import Swal from "sweetalert2";
import {useRouter} from "next/router";

const cabecalho: Cabecalho[] = [
    {chave: 'id', valor: '#'},
    {chave: 'nome', valor: 'Nome'}
]

export default function ListaMedico() {
    const router = useRouter();
    const [medicos, setMedicos] = useState<Medico[]>([]);

    useEffect(() => {
        carregarMedicos();
    }, [])

    async function carregarMedicos() {
        await MedicoService.listar().then(response => setMedicos(response) as Medico[]);
    }

    const editarMedico = (medico: Medico) => {
        router.push(`/medico/editar/${medico.id}`);
    }

    const deletarMedico = (medico: Medico) => {
        Swal.fire({
            title: 'Deseja excluir?',
            text: "Esta ação não pode ser revertida!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#09f',
            cancelButtonColor: '#d33',
            confirmButtonText: `Sim, Excluir ${medico.nome}!`
        })
            .then(({value}) => value && deletar(medico.id))
    }

    async function deletar(id: string) {
        MedicoService.deletar(id).then(() => {
            Swal.fire('Uhul!', 'Médico deletado', 'success');
            carregarMedicos();
        })
    }

    return (
        <>
            <div className="flex flex-col">
                <Link href="/medico/cadastrar">
                    <span>Novo Médico</span>
                </Link>

                <Link href="/">
                    <span>Tela inicial</span>
                </Link>
            </div>

            <Table cabecalho={cabecalho}
                   dados={medicos}
                   editar={editarMedico}
                   deletar={deletarMedico}
                   acoes
            />
        </>
    )
}
