import {Cabecalho} from "../../utils/itens-tabela/cabecalho";
import Link from "next/link";
import Table from "../../shareds/Table/index";
import {useEffect, useState} from "react";
import * as AtendimentoService from '/src/services/Atendimento.service';
import Swal from "sweetalert2";
import {useRouter} from "next/router";
import Atendimento from "../../models/atendimento";

const cabecalho: Cabecalho[] = [
    {chave: 'id', valor: '#'},
    {chave: 'nome', valor: 'Nome'}
]

export default function ListaAtendimento() {
    const router = useRouter();
    const [atendimentos, setAtendimentos] = useState<Atendimento[]>([]);

    useEffect(() => {
        carregarAtendimentos();
    }, [])

    async function carregarAtendimentos() {
        await AtendimentoService.listar().then(response => setAtendimentos(response));
    }

    const editarAtendimento = (atendimento: Atendimento) => {
        router.push(`/atendimento/editar/${atendimento.id}`);
    }

    const deletarAtendimento = (atendimento: Atendimento) => {
        Swal.fire({
            title: 'Deseja excluir?',
            text: "Esta ação não pode ser revertida!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#09f',
            cancelButtonColor: '#d33',
            confirmButtonText: `Sim, Excluir ${atendimento.nome}!`
        })
            .then(({value}) => value && deletar(atendimento.id))
    }

    async function deletar(id: string) {
        AtendimentoService.deletar(id).then(() => {
            Swal.fire('Uhul!', 'Atendimento deletado', 'success');
            carregarAtendimentos();
        })
    }

    return (
        <>
            <div className="flex flex-col">
                <Link href="/atendimento/cadastrar">
                    <span>Novo Atendimento</span>
                </Link>

                <Link href="/">
                    <span>Tela inicial</span>
                </Link>
            </div>

            <Table cabecalho={cabecalho}
                   dados={atendimentos}
                   editar={editarAtendimento}
                   deletar={deletarAtendimento}
                   acoes/>
        </>
    )
}
