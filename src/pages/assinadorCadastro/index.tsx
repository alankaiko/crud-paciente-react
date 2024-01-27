import React, {useEffect, useState} from "react";
import Assinador from "../../models/assinador";
import {Box} from "@mui/material";
import * as AssinadorService from "../../services/Assinador.service";
import LinkCustom from "../../components/LinkCustom/index";
import Form from "../../components/Form/index";
import Input from "../../components/Input/index";
import Button from "../../components/Button/index";

export default function PaginaAssinadorCadastro() {
    const formularioInicial = {
        nome: '',
        crm: '',
        estado: ''
    } as Assinador;

    const [formulario, setFormulario] = useState(formularioInicial);

    useEffect(() => {
        setFormulario(formularioInicial)
    }, []);

    const inputMudou = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target

        setFormulario({
            ...formulario,
            [name]: value
        })
    }

    const submeter = () => {
        AssinadorService.criar(formulario).then(response => setFormulario(response));
        setFormulario(formularioInicial);
    }

    return <Box>
        <LinkCustom href='/assinador' label='Lista de Assinadores'/>

        <Box>
            <Form title='Adicionar Assinador' onSubmit={submeter}>
                <Input value={formulario.nome}
                       onChange={inputMudou}
                       name="nome"
                       label="Nome"
                       placeholder="Nome"
                       required/>

                <Input value={formulario.crm}
                       name="crm"
                       onChange={inputMudou}
                       label="CRM"/>

                <Input value={formulario.estado}
                       name="estado"
                       onChange={inputMudou}
                       label="UF"/>

                <Button>
                    {formulario.id ? 'Atualizar' : 'Salvar'}
                </Button>
            </Form>
        </Box>
    </Box>
}
