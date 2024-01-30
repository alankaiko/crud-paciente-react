import Table from "../../shareds/Table/index";
import Link from "next/link";
import {Cabecalho} from "../../utils/itens-tabela/cabecalho";
import {useEffect, useState} from "react";
import Convenio from "../../models/convenio";
import * as ConvenioService from '/src/services/Convenio.service';
import {useRouter} from "next/router";
import Swal from "sweetalert2";

const cabecalho: Cabecalho[] = [
    {chave: 'id', valor: '#'},
    {chave: 'nome', valor: 'Nome'}
]

export default function ListaConvenio() {
    const router = useRouter();
    const [convenios, setConvenios] = useState<Convenio[]>([]);

    useEffect(() => {
        carregarConvenios();
    }, [])

    async function carregarConvenios() {
        await ConvenioService.listar().then(response => setConvenios(response)) as Convenio[];
    }

    const editarConvenio = (convenio: Convenio) => {
        router.push(`/convenio/editar/${convenio.id}`);
    }

    const deletarConvenio = (convenio: Convenio) => {
        Swal.fire({
            title: 'Deseja excluir?',
            text: "Esta ação não pode ser revertida!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#09f',
            cancelButtonColor: '#d33',
            confirmButtonText: `Sim, Excluir ${convenio.nome}!`
        })
            .then(({value}) => value && deletar(convenio.id))
    }

    async function deletar(id: string) {
        ConvenioService.deletar(id).then(() => {
            Swal.fire('Uhul!', 'Convênio deletado', 'success');
            carregarConvenios();
        })
    }

    return (
        <>
            <div className="flex flex-col">
                <Link href="/convenio/cadastrar">
                    <span>Novo Convenio</span>
                </Link>

                <Link href="/">
                    <span>Tela inicial</span>
                </Link>
            </div>

            <Table cabecalho={cabecalho}
                   dados={convenios}
                   editar={editarConvenio}
                   deletar={deletarConvenio}
                   acoes
            />
        </>
    )
}
