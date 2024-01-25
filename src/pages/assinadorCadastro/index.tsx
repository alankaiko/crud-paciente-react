import React, {useEffect, useState} from "react";
import Assinador from "../../models/assinador";
import {Box} from "@mui/material";
import Form from "../../components/Form/index";
import Input from "../../components/Input/index";
import Button from "../../components/Button/index";
import * as AssinadorService from "../../services/Assinador.service";
import LinkCustom from "../../components/LinkCustom/index";

export default function PaginaAssinadorCadastro() {
    const [formulario, setFormulario] = useState<Assinador>({} as Assinador);

    useEffect(() => {
        formulario ? setFormulario(formulario) : setFormulario(new Assinador)
    }, [formulario]);

    const inputMudou = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, nome} = event.target;

        setFormulario({
            ...formulario,
            [nome]: value
        })
    }

    const submeter = () => {
        console.log('tetstes');
        AssinadorService.criar(formulario).then(response => setFormulario(response));
        setFormulario(new Assinador);
    }

    return <Box>
        <LinkCustom href='/assinador' label='Lista de Assinadores'/>

        <Box>
            <Form title='Adicionar Assinador' onSubmit={submeter}>
                <Input onChange={inputMudou}
                       value={formulario.nome}
                       name="nome"
                       label="Nome"
                       placeholder="Nome"
                       required/>

                <Input onChange={inputMudou}
                       value={formulario.crm}
                       name="crm"
                       label="CRM"/>

                <Input onChange={inputMudou}
                       value={formulario.estado}
                       name="estado"
                       label="UF"/>

                <Button>
                    {formulario.id ? 'Atualizar' : 'Salvar'}
                </Button>
            </Form>
        </Box>
    </Box>
}
