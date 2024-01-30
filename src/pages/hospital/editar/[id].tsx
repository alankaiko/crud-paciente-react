import * as HospitalService from '/src/services/Hospital.service';
import {HospitalCadastro} from './../../../components/HospitalCadastro';

export default HospitalCadastro;

export async function getServerSideProps({params}) {
    const hospital = await HospitalService.buscarPorId(params.id);

    return {
        props: {hospital}
    }
}
