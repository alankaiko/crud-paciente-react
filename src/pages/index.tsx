import Link from "next/link";

export default function Home() {
    return (
        <div>
            <h1>Principal</h1>
            <div className="flex flex-col">
                <Link href="/assinador">
                    <span>Assinador</span>
                </Link>
            </div>

            <div className="flex flex-col">
                <Link href="/convenio">
                    <span>Convênio</span>
                </Link>
            </div>

            <div className="flex flex-col">
                <Link href="/hospital">
                    <span>Hospital</span>
                </Link>
            </div>

            <div className="flex flex-col">
                <Link href="/medico">
                    <span>Médico</span>
                </Link>
            </div>

            <div className="flex flex-col">
                <Link href="/paciente">
                    <span>Paciente</span>
                </Link>
            </div>

            <div className="flex flex-col">
                <Link href="/atendimento">
                    <span>Atendimento</span>
                </Link>
            </div>
        </div>
    )
}
