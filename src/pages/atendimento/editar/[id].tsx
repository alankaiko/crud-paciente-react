import * as AtendimentoService from '/src/services/Atendimento.service';
import {AtendimentoCadastro} from './../../../components/AtendimentoCadastro';

export default AtendimentoCadastro;

export async function getServerSideProps({params}) {
    const atendimento = await AtendimentoService.buscarPorId(params.id);

    return {
        props: {atendimento}
    }
}
