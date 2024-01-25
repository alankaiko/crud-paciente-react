import React, {useEffect, useState} from "react";
import Assinador from "../../models/assinador";
import * as AssinadorService from "../../services/Assinador.service";
import Table from "../../components/Table/index";
import Swal from "sweetalert2";
import {Cabecalho} from "../../utils/itens-tabela/cabecalho";
import {Box} from "@mui/system";
import LinkCustom from "../../components/LinkCustom/index";

const cabecalhoAssinador: Cabecalho[] = [
    {chave: 'codigo', valor: '#'},
    {chave: 'nome', valor: 'Nome'},
    {chave: 'crm', valor: 'CRM'},
    {chave: 'estado', valor: 'UF'}
]

export default function PaginaAssinador() {
    const [assinadores, setAssinadores] = useState<Assinador[]>([]);

    useEffect(() => {
        AssinadorService.listar().then((response: Assinador[]) => setAssinadores(response));
    }, []);

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
            .then(({value}) => value && deletarAssinador(assinador.id))
    }

    const deletarAssinador = async (codigo: string) => {

    }

    return <Box>
        <LinkCustom href='/assinadorCadastro' label='Novo Assinador'/>

        <Table cabecalho={cabecalhoAssinador}
               dados={assinadores}
               acoes
               deletar={deletar}
               detalhes={detalhar}>
        </Table>
    </Box>
}
