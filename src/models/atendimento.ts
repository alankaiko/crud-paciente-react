import Assinador from "./assinador";
import Paciente from "./paciente";
import Hospital from "./hospital";
import Medico from "./medico";
import Convenio from "./convenio";

export default class Atendimento {
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
