import Medico from "../../models/medico";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import * as MedicoService from '/src/services/Medico.service';
import Form from "../../shareds/Form/index";
import Input from "../../shareds/Input/index";
import Button from "../../shareds/Button/index";
import Link from "next/link";

export {MedicoCadastro};

interface MedicoProps {
    medico: Medico;
}

interface FormularioMedico {
    id?: string;
    nome: string;
}

function MedicoCadastro(props: MedicoProps) {
    const router = useRouter();

    const formularioInicial: FormularioMedico = props.medico ? {
        id: props.medico.id,
        nome: props.medico.nome
    } : {
        nome: ''
    }

    const [formulario, setFormulario] = useState(formularioInicial);

    useEffect(() => {
        setFormulario(formularioInicial);
    }, [props.medico])

    const submeter = () => {
        formulario.id ? atualizarMedico(formulario) : cadastrarMedico(formulario);
        setFormulario(formularioInicial);
    }

    const atualizarMedico = (formulario: FormularioMedico) => {
        const medico = {
            id: formulario.id,
            nome: formulario.nome
        } as Medico;

        MedicoService.atualizar(medico).then(response => {
            if (response)
                router.push('/medico');
        })
    }

    const cadastrarMedico = (formulario: FormularioMedico) => {
        const medico = {
            nome: formulario.nome
        } as Medico;

        MedicoService.criar(medico).then(response => {
            if (response)
                router.push('/medico');
        })
    }

    const capturarValorCampo = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target;

        setFormulario({
            ...formulario,
            [name]: value
        })
    }


    return <Form title="Médico formulário" onSubmit={submeter}>
        <Input onChange={capturarValorCampo}
               value={formulario.nome}
               name="nome"
               label="Nome"
        />

        <Button>
            {formulario.id ? 'Atualizar' : 'Salvar'}
        </Button>

        <Link href="/convenio">
            <span>Voltar</span>
        </Link>

        <Link href="/">
            <span>Tela inicial</span>
        </Link>
    </Form>
}
