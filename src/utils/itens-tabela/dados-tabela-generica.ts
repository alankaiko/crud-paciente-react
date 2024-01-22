import {Cabecalho} from "./cabecalho";

type CabecalhoIndexado = {
    [key: string]: Cabecalho;
}

type Item = {
    [key: string]: any;
}

export default function organizar(dados: any[], cabecalhos: Cabecalho[]): [Item, CabecalhoIndexado] {
    const cabecalhoIndexado: CabecalhoIndexado = {};

    cabecalhos.forEach(cabecalho => {
        cabecalhoIndexado[cabecalho.chave] = {...cabecalho};
    })

    const chavesOrdenadas = Object.keys(cabecalhoIndexado);

    const dadosOrganizados = dados.map(item => {
        const itemOrganizado: Item = {}

        chavesOrdenadas.forEach(chave => {
            itemOrganizado[chave] = item[chave]
        })

        itemOrganizado.$original = item;

        return itemOrganizado;
    });

    return [dadosOrganizados, cabecalhoIndexado];
}





















