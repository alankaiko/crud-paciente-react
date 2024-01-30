import {useEffect, useState} from "react";
import Assinador from "../../models/assinador";
import * as AssinadorService from '/src/services/Assinador.service';
import Table from "../../shareds/Table/index";
import {Cabecalho} from "../../utils/itens-tabela/cabecalho";
import Swal from 'sweetalert2';
import Link from "next/link";
import {useRouter} from "next/router";

const cabecalho: Cabecalho[] = [
    {chave: 'id', valor: '#'},
    {chave: 'nome', valor: 'Nome'},
    {chave: 'crm', valor: 'CRM'},
    {chave: 'estado', valor: 'UF'}
];

export default function ListaAssinador() {
    const [assinadores, setAssinadores] = useState<Assinador[]>([]);
    const [assinador, setAssinador] = useState<Assinador | undefined>(undefined);
    const router = useRouter();

    useEffect(() => {
        carregarAssinadores();
    }, [])

    async function carregarAssinadores() {
        await AssinadorService.listar().then(response => setAssinadores(response) as Assinador[]);
    }

    const editarAssinador = (assinador: Assinador) => {
        router.push(`/assinador/editar/${assinador.id}`);
    }

    const deletarAssinador = (assinador: Assinador) => {
        Swal.fire({
            title: 'Deseja excluir?',
            text: "Esta ação não pode ser revertida!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#09f',
            cancelButtonColor: '#d33',
            confirmButtonText: `Sim, Excluir ${assinador.nome}!`
        })
            .then(({value}) => value && deletar(assinador.id))
    }

    async function deletar(id: string) {
        AssinadorService.deletar(id).then(() => {
            Swal.fire('Uhul!', 'Assinador deletado', 'success');
            carregarAssinadores();
        });
    }

    return (
        <>
            <div className="flex flex-col">
                <Link href="/assinador/cadastrar">
                    <span>Novo Assinador</span>
                </Link>

                <Link href="/">
                    <span>Tela inicial</span>
                </Link>
            </div>

            <Table cabecalho={cabecalho}
                   dados={assinadores}
                   editar={editarAssinador}
                   deletar={deletarAssinador}
                   acoes/>
        </>
    )
}
