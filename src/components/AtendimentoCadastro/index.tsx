import {useRouter} from "next/router";
import Convenio from "../../models/convenio";
import React, {useEffect, useState} from "react";
import * as AtendimentoService from '/src/services/Atendimento.service';
import Form from "../../shareds/Form/index";
import Input from "../../shareds/Input/index";
import Button from "../../shareds/Button/index";
import Link from "next/link";
import Paciente from "../../models/paciente";
import Hospital from "../../models/hospital";
import Medico from "../../models/medico";
import Assinador from "../../models/assinador";
import Atendimento from "../../models/atendimento";

export {AtendimentoCadastro};

interface AtendimentoProps {
    atendimento?: Atendimento;
}

interface FormularioAtendimento {
    id?: string;
    procedimento: string;
    leito: string;
    data: Date;
    hora: string;
    ph: string;
    po: string;
    pco: string;
    hco: string;
    co2total: string;
    be: string;
    o2sat: string;
    na: string;
    k: string;
    file: string;
    material: string;
    paciente: Paciente;
    hospital: Hospital;
    medico: Medico;
    convenio: Convenio;
    assinador: Assinador;
}

function AtendimentoCadastro(props: AtendimentoProps) {
    const router = useRouter();

    const formularioInicial: FormularioAtendimento = props.atendimento ? {
        id: props.atendimento.id,
        procedimento: props.atendimento.procedimento,
        leito: props.atendimento.leito,
        data: props.atendimento.data,
        hora: props.atendimento.hora,
        ph: props.atendimento.ph,
        po: props.atendimento.po,
        pco: props.atendimento.pco,
        hco: props.atendimento.hco,
        co2total: props.atendimento.co2total,
        be: props.atendimento.be,
        o2sat: props.atendimento.o2sat,
        na: props.atendimento.na,
        k: props.atendimento.k,
        file: props.atendimento.file,
        material: props.atendimento.material,
        paciente: props.atendimento.paciente,
        hospital: props.atendimento.hospital,
        medico: props.atendimento.medico,
        convenio: props.atendimento.convenio,
        assinador: props.atendimento.assinador
    } : {
        procedimento: '',
        leito: '',
        data: new Date,
        hora: '',
        ph: '',
        po: '',
        pco: '',
        hco: '',
        co2total: '',
        be: '',
        o2sat: '',
        na: '',
        k: '',
        file: '',
        material: '',
        paciente: new Paciente(),
        hospital: new Hospital(),
        medico: new Medico(),
        convenio: new Convenio(),
        assinador: new Assinador()
    }

    const [formulario, setFormulario] = useState(formularioInicial);

    useEffect(() => {
        setFormulario(formularioInicial);
    }, [props.atendimento]);

    const submeter = () => {
        formulario.id ? atualizarAtendimento(formulario) : cadastrarAtendimento(formulario);
        setFormulario(formularioInicial);
    }

    const atualizarAtendimento = (formulario: FormularioAtendimento) => {
        const atendimento = {
            id: formulario.id,
            procedimento: formulario.procedimento,
            leito: formulario.leito,
            data: formulario.data,
            hora: formulario.hora,
            ph: formulario.ph,
            po: formulario.po,
            pco: formulario.pco,
            hco: formulario.hco,
            co2total: formulario.co2total,
            be: formulario.be,
            o2sat: formulario.o2sat,
            na: formulario.na,
            k: formulario.k,
            file: formulario.file,
            material: formulario.material,
            paciente: formulario.paciente,
            hospital: formulario.hospital,
            medico: formulario.medico,
            convenio: formulario.convenio,
            assinador: formulario.assinador
        } as Atendimento;

        AtendimentoService.atualizar(atendimento).then(response => {
            if (response)
                router.push('/atendimento');
        })
    }

    const cadastrarAtendimento = (formulario: FormularioAtendimento) => {
        const atendimento = {
            procedimento: formulario.procedimento,
            leito: formulario.leito,
            data: formulario.data,
            hora: formulario.hora,
            ph: formulario.ph,
            po: formulario.po,
            pco: formulario.pco,
            hco: formulario.hco,
            co2total: formulario.co2total,
            be: formulario.be,
            o2sat: formulario.o2sat,
            na: formulario.na,
            k: formulario.k,
            file: formulario.file,
            material: formulario.material,
            paciente: formulario.paciente,
            hospital: formulario.hospital,
            medico: formulario.medico,
            convenio: formulario.convenio,
            assinador: formulario.assinador
        } as Atendimento;

        AtendimentoService.criar(atendimento).then(response => {
            if (response)
                router.push('/atendimento');
        })
    }

    const capturarValorCampo = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target;

        setFormulario({
            ...formulario,
            [name]: value
        })
    }

    return <Form title="Atendimento formulário" onSubmit={submeter}>
        <Input onChange={capturarValorCampo}
               value={formulario.paciente.nome}
               name="nome"
               label="Nome"
        />

        <Button>
            {formulario.id ? 'Atualizar' : 'Salvar'}
        </Button>

        <Link href="/atendimento">
            <span>Voltar</span>
        </Link>

        <Link href="/">
            <span>Tela inicial</span>
        </Link>
    </Form>
}
