import Assinador from "../../../models/assinador";
import {Box} from "@mui/material";
import Form from "../../../shared/Form/index";
import React, {useEffect, useState} from "react";

declare interface AssinadorFormProps {
    formulario?: Assinador;
    onSubmit?: (assinador: Assinador) => void;
}

const AssinadorForm: React.FC<AssinadorFormProps> = (props) => {
    const [formulario, setFormulario] = useState<Assinador>({} as Assinador);

    useEffect(() => {
        props.formulario ? setFormulario(props.formulario) : setFormulario(new Assinador)
    }, [props.formulario]);

    const inputMudou = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target;

        setFormulario({
            ...formulario,
            [name]: value
        })
    }

    const submeter = () => {
        salvarFormulario(formulario);
        setFormulario(new Assinador);
    }

    const salvarFormulario = (assinador: Assinador) => {
        props.onSubmit && props.onSubmit(assinador);
    }

    return <Box>
        <Box>
            <Form title='Adicionar Assinador' onSubmit={submeter}>
                <Input onChange={inputMudou}
                       value={formulario.nome}
                       name='nome'
                       label='Nome'
                       required/>

                <Input onChange={inputMudou}
                       value={formulario.crm}
                       name='crm'
                       label='CRM'
                       required/>

                <Input onChange={inputMudou}
                       value={formulario.estado}
                       name='estado'
                       label='Estado'
                       required/>

                <Button>
                    {formulario.id ? 'Atualizar' : 'Salvar'}
                </Button>
            </Form>
        </Box>
    </Box>
}

export default AssinadorForm;
