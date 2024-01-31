import Paciente from "../../models/paciente";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import * as PacienteService from "../../services/Paciente.service";
import Form from "../../shareds/Form/index";
import Input from "../../shareds/Input/index";
import Button from "../../shareds/Button/index";
import Link from "next/link";

export {PacienteCadastro};

interface PacienteProps {
    paciente?: Paciente;
}

interface FormularioPaciente {
    id?: string;
    nome: string;
}

function PacienteCadastro(props: PacienteProps) {
    const router = useRouter();

    const formularioInicial: FormularioPaciente = props.paciente ? {
        id: props.paciente.id,
        nome: props.paciente.nome
    } : {
        nome: ''
    }

    const [formulario, setFormulario] = useState(formularioInicial);

    useEffect(() => {
        setFormulario(formularioInicial);
    }, [props.paciente])

    const submeter = () => {
        formulario.id ? atualizarPaciente(formulario) : cadastrarPaciente(formulario);
        setFormulario(formularioInicial);
    }

    const atualizarPaciente = (formulario: FormularioPaciente) => {
        const paciente = {
            id: formulario.id,
            nome: formulario.nome
        } as Paciente;

        PacienteService.atualizar(paciente).then(response => {
            if (response)
                router.push('/paciente');
        })
    }

    const cadastrarPaciente = (formulario: FormularioPaciente) => {
        const paciente = {
            nome: formulario.nome
        } as Paciente;

        PacienteService.criar(paciente).then(response => {
            if (response)
                router.push('/paciente');
        })
    }

    const capturarValorCampo = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target;

        setFormulario({
            ...formulario,
            [name]: value
        })
    }

    return <Form title="Paciente formulário" onSubmit={submeter}>
        <Input onChange={capturarValorCampo}
               value={formulario.nome}
               name="nome"
               label="Nome"
        />

        <Button>
            {formulario.id ? 'Atualizar' : 'Salvar'}
        </Button>

        <Link href="/paciente">
            <span>Voltar</span>
        </Link>

        <Link href="/">
            <span>Tela inicial</span>
        </Link>
    </Form>
}
