import * as ConvenioService from '/src/services/Convenio.service';
import {ConvenioCadastro} from './../../../components/ConvenioCadastro';

export default ConvenioCadastro;

export async function getServerSideProps({params}) {
    const convenio = await ConvenioService.buscarPorId(params.id);

    return {
        props: {convenio}
    }
}
