import {GridColDef} from "@mui/x-data-grid";

type CabecalhoDataGripIndexado = {
    [key: string]: GridColDef;
}

type ItemDataGrip = {
    [key: string]: any;
}

export default function organizarDataGrip(dados: any[], cabecalhos: GridColDef[]): [ItemDataGrip, CabecalhoDataGripIndexado] {
    const cabecalhoIndexado: CabecalhoDataGripIndexado = {};

    cabecalhos.forEach(cabecalho => {
        cabecalhoIndexado[cabecalho.field] = {...cabecalho};
    })

    const chavesOrdenadas = Object.keys(cabecalhoIndexado);

    const dadosOrganizados = dados.map(item => {
        const itemOrganizado: ItemDataGrip = {}

        chavesOrdenadas.forEach(chave => {
            itemOrganizado[chave] = item[chave]
        })

        itemOrganizado.$original = item;

        return itemOrganizado;
    });

    return [dadosOrganizados, cabecalhoIndexado];
}





















