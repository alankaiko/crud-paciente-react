import {Cabecalho} from "../../utils/itens-tabela/cabecalho";
import Link from "next/link";
import Table from "../../shareds/Table/index";
import {useEffect, useState} from "react";
import Hospital from "../../models/hospital";
import * as HospitalService from '/src/services/Hospital.service';
import Swal from "sweetalert2";
import {useRouter} from "next/router";

const cabecalho: Cabecalho[] = [
    {chave: 'id', valor: '#'},
    {chave: 'nome', valor: 'Nome'}
]

export default function ListaHospital() {
    const router = useRouter();
    const [hospitais, setHospitais] = useState<Hospital[]>([]);

    useEffect(() => {
        carregarHospitais();
    }, [])

    async function carregarHospitais() {
        await HospitalService.listar().then(response => setHospitais(response));
    }

    const editarHospital = (hospital: Hospital) => {
        router.push(`/hospital/editar/${hospital.id}`);
    }

    const deletarHospital = (hospital: Hospital) => {
        Swal.fire({
            title: 'Deseja excluir?',
            text: "Esta ação não pode ser revertida!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#09f',
            cancelButtonColor: '#d33',
            confirmButtonText: `Sim, Excluir ${hospital.nome}!`
        })
            .then(({value}) => value && deletar(hospital.id))
    }

    async function deletar(id: string) {
        HospitalService.deletar(id).then(() => {
            Swal.fire('Uhul!', 'Hospital deletado', 'success');
            carregarHospitais();
        })
    }

    return (
        <>
            <div className="flex flex-col">
                <Link href="/hospital/cadastrar">
                    <span>Novo Hospital</span>
                </Link>

                <Link href="/">
                    <span>Tela inicial</span>
                </Link>
            </div>

            <Table cabecalho={cabecalho}
                   dados={hospitais}
                   editar={editarHospital}
                   deletar={deletarHospital}
                   acoes/>
        </>
    )
}
