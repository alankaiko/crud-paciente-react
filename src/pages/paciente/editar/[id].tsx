import * as PacienteService from '/src/services/Paciente.service';
import {PacienteCadastro} from "../../../components/PacienteCadastro/index";

export default PacienteCadastro;

export async function getServerSideProps({params}) {
    const paciente = await PacienteService.buscarPorId(params.id);

    return {
        props: {paciente}
    }
}
