import * as AssinadorService from '/src/services/Assinador.service';
import {AssinadorCadastro} from './../../../components/AssinadorCadastro';

export default AssinadorCadastro;

export async function getServerSideProps({params}) {
    const assinador = await AssinadorService.buscarPorId(params.id);

    return {
        props: {assinador}
    }
}
