import Assinador from "../../models/assinador";
import React, {useEffect, useState} from "react";
import Form from "../../shareds/Form/index";
import Input from "../../shareds/Input/index";
import Button from "../../shareds/Button/index";
import * as AssinadorService from '/src/services/Assinador.service';
import {useRouter} from "next/router";
import Link from "next/link";

export {AssinadorCadastro};

interface AssinadorProps {
    assinador?: Assinador;
}

interface FormularioAssinador {
    id?: string;
    nome: string;
    crm: string;
    estado: string;
}

function AssinadorCadastro(props: AssinadorProps) {
    const router = useRouter();

    const formularioInicial: FormularioAssinador = props.assinador ? {
        id: props.assinador.id,
        nome: props.assinador.nome,
        crm: props.assinador.crm,
        estado: props.assinador.estado
    } : {
        nome: '',
        crm: '',
        estado: ''
    }

    const [formulario, setFormulario] = useState(formularioInicial);

    useEffect(() => {
        setFormulario(formularioInicial);
    }, [props.assinador])

    const submeter = () => {
        formulario.id ? atualizarAssinador(formulario) : cadastrarAssinador(formulario);
        setFormulario(formularioInicial);
    }

    const atualizarAssinador = (formulario: FormularioAssinador) => {
        const assinador = {
            id: formulario.id,
            nome: formulario.nome,
            crm: formulario.crm,
            estado: formulario.estado
        } as Assinador;

        AssinadorService.atualizar(assinador).then(response => {
            if (response) {
                router.push('/assinador');
            }
        });
    }

    const cadastrarAssinador = (formulario: FormularioAssinador) => {
        const assinador = {
            nome: formulario.nome,
            crm: formulario.crm,
            estado: formulario.estado
        } as Assinador;

        AssinadorService.criar(assinador).then(response => {
            if (response) {
                router.push('/assinador');
            }
        });
    }

    const capturarValorCampo = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target;

        setFormulario({
            ...formulario,
            [name]: value
        })
    }

    return <Form title="Assinador formulário" onSubmit={submeter}>
        <Input onChange={capturarValorCampo}
               value={formulario.nome}
               name="nome"
               label="Nome"
        />

        <Input onChange={capturarValorCampo}
               value={formulario.crm}
               name="crm"
               label="Crm"
        />

        <Input onChange={capturarValorCampo}
               value={formulario.estado}
               name="estado"
               label="UF"
        />
        <Button>
            {formulario.id ? 'Atualizar' : 'Salvar'}
        </Button>

        <Link href="/assinador">
            <span>Voltar</span>
        </Link>
    </Form>
}
