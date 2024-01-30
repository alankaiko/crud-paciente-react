import {useRouter} from "next/router";
import Convenio from "../../models/convenio";
import React, {useEffect, useState} from "react";
import * as ConvenioService from '/src/services/Convenio.service';
import Form from "../../shareds/Form/index";
import Input from "../../shareds/Input/index";
import Button from "../../shareds/Button/index";
import Link from "next/link";

export {ConvenioCadastro};

interface ConvenioProps {
    convenio?: Convenio;
}

interface FormularioConvenio {
    id?: string;
    nome: string;
}

function ConvenioCadastro(props: ConvenioProps) {
    const router = useRouter();

    const formularioInicial: FormularioConvenio = props.convenio ? {
        id: props.convenio.id,
        nome: props.convenio.nome,
    } : {
        nome: ''
    }

    const [formulario, setFormulario] = useState(formularioInicial);

    useEffect(() => {
        setFormulario(formularioInicial);
    }, [props.convenio]);

    const submeter = () => {
        formulario.id ? atualizarConvenio(formulario) : cadastrarConvenio(formulario);
        setFormulario(formularioInicial);
    }

    const atualizarConvenio = (formulario: FormularioConvenio) => {
        const convenio = {
            id: formulario.id,
            nome: formulario.nome
        } as Convenio;

        ConvenioService.atualizar(convenio).then(response => {
            if (response)
                router.push('/convenio');
        })
    }

    const cadastrarConvenio = (formulario: FormularioConvenio) => {
        const convenio = {
            nome: formulario.nome
        } as Convenio;

        ConvenioService.criar(convenio).then(response => {
            if (response)
                router.push('/convenio');
        })
    }

    const capturarValorCampo = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target;

        setFormulario({
            ...formulario,
            [name]: value
        })
    }

    return <Form title="Convênio formulário" onSubmit={submeter}>
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
