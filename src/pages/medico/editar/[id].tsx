import * as MedicoService from '/src/services/Medico.service';
import {MedicoCadastro} from "../../../components/MedicoCadastro/index";

export default MedicoCadastro;

export async function getServerSideProps({params}) {
    const medico = await MedicoService.buscarPorId(params.id);

    return {
        props: {medico}
    }
}
