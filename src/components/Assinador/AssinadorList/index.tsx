import React, {useState} from "react";
import {Cabecalho} from "../../../utils/itens-tabela/cabecalho";
import Assinador from "../../../models/assinador";
import Swal from 'sweetalert2'
import Table from "../../../shared/index";

const cabecalhoAssinador: Cabecalho[] = [
    {chave: 'codigo', valor: '#'},
    {chave: 'nome', valor: 'Nome'},
    {chave: 'crm', valor: 'CRM'},
    {chave: 'estado', valor: 'UF'}
]

declare interface AssinadorProps {
    assinadores: Assinador[];
}

const AssinadorList: React.FC<AssinadorProps> = (props) => {

    const [atualizarProduto, setAtualizarProduto] = useState<Assinador | undefined>(undefined);

    const detalhar = (assinador: Assinador) => {
        Swal.fire(
            'Detalhar',
            `${assinador.nome}`,
            'info'
        )
    }

    const deletar = (assinador: Assinador) => {
        Swal.fire({
            title: 'Confirmar?',
            text: "deseja deletar!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#09f',
            cancelButtonColor: '#d33',
            confirmButtonText: `deletar!`
        })
            .then(({value}) => value && deletarAssinador(assinador.codigo))
    }

    const deletarAssinador = async (codigo: string) => {

    }

    return <>
        <Table cabecalho={cabecalhoAssinador}
               dados={props.assinadores}
               acoes
               deletar={deletar}
               editar={setAtualizarProduto}
               detalhes={detalhar}>
        </Table>
    </>
}

export default AssinadorList;



























