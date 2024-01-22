import AssinadorList from "../../components/Assinador/AssinadorList/index";
import Assinadores from "../../components/Assinador/AssinadorList/AssinadorTable.mockdata";

export default function PaginaAssinador() {
    return (
        <AssinadorList assinadores={Assinadores}/>
    )
}
