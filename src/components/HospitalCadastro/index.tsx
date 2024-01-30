import Hospital from "../../models/hospital";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import * as ConvenioService from '/src/services/Hospital.service';
import Form from "../../shareds/Form/index";
import Input from "../../shareds/Input/index";
import Button from "../../shareds/Button/index";
import Link from "next/link";

export {HospitalCadastro};

interface HospitalProps {
    hospital?: Hospital;
}

interface FormularioHospital {
    id?: string;
    nome: string;
}


function HospitalCadastro(props: HospitalProps) {
    const router = useRouter();

    const formularioInicial: FormularioHospital = props.hospital ? {
        id: props.hospital.id,
        nome: props.hospital.nome
    } : {
        nome: ''
    }

    const [formulario, setFormulario] = useState(formularioInicial);

    useEffect(() => {
        setFormulario(formularioInicial);
    }, [props.hospital]);

    const submeter = () => {
        formulario.id ? atualizarHospital(formulario) : cadastrarHospital(formulario);
        setFormulario(formularioInicial);
    }

    const atualizarHospital = (formularioHospital: FormularioHospital) => {
        const hospital = {
            id: formularioHospital.id,
            nome: formularioHospital.nome
        } as Hospital;

        ConvenioService.atualizar(hospital).then(response => {
            if (response)
                router.push('/hospital');
        })
    }

    const cadastrarHospital = (formularioHospital: FormularioHospital) => {
        const hospital = {
            nome: formularioHospital.nome
        } as Hospital;

        ConvenioService.criar(hospital).then(response => {
            if (response)
                router.push('/hospital');
        })
    }

    const capturarValorCampo = (envent: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target;

        setFormulario({
            ...formulario,
            [name]: value
        })
    }

    return <Form title="Hospital formulário" onSubmit={submeter}>
        <Input onChange={capturarValorCampo}
               value={formulario.nome}
               name="nome"
               label="Nome"
        />

        <Button>
            {formulario.id ? 'Atualizar' : 'Salvar'}
        </Button>

        <Link href="/hospital">
            <span>Voltar</span>
        </Link>

        <Link href="/">
            <span>Tela inicial</span>
        </Link>
    </Form>
}
