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
        </div>
    )
}
