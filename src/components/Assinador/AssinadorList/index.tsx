import React, {useState} from "react";
import {Cabecalho} from "../../../utils/itens-tabela/cabecalho";
import Assinador from "../../../models/assinador";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {Box, IconButton} from "@mui/material";
import Swal from 'sweetalert2'
import styles from './styles.module.scss';
import Assinadores from "./AssinadorTable.mockdata";
import {DataGrid, GridColDef} from "@mui/x-data-grid";

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

    const colunaAssinadores: GridColDef[] = [
        {field: "id", headerName: "Código", width: 100},
        {field: "nome", headerName: "Nome", width: 600},
        {field: "crm", headerName: "CRM", width: 100},
        {field: "estado", headerName: "UF", width: 100},
        {
            field: "Editar",
            renderCell: (cellValues) => {
                const dataGridValue = cellValues;
                return (
                    <IconButton
                        sx={{display: "flex", alignItems: "center"}}
                        onClick={() => {
                        }}
                    >
                        <EditIcon/>
                    </IconButton>
                );
            },
            width: 130,
        },
        {
            field: "Excluir",
            renderCell: (cellValues) => {
                return (
                    <IconButton
                        sx={{display: "flex", alignItems: "center"}}
                        onClick={() => {
                        }}
                    >
                        <DeleteIcon/>
                    </IconButton>
                );
            },
            width: 130,
        }
    ];

    return (
        <Box>
            <Box className={styles.container}>
                <Box className={styles.table}>
                    <DataGrid
                        rows={Assinadores || []}
                        columns={colunaAssinadores}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default AssinadorList;



























