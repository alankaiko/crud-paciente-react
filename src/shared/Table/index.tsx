import React from "react";
import {Cabecalho} from "../../utils/itens-tabela/cabecalho";
import organizar from "../../utils/itens-tabela/dados-tabela-generica";
import Button from "../Button/index";
import styles from './styles.module.scss';

declare interface TableProps {
    cabecalho: Cabecalho[];
    dados: any[];

    acoes?: boolean;

    deletar?: (item: any) => void;
    detalhes?: (item: any) => void;
    editar?: (item: any) => void;
}

const Table: React.FC<TableProps> = (props) => {
    const [dadosOrganizados, cabecalhoIndexado] = organizar(props.dados, props.cabecalho);

    return <table className={styles.AppTable}>
        <thead>
        <tr>
            {
                props.cabecalho.map(coluna =>
                    <th className={coluna.alinhadoDireita ? 'right' : ''}
                        key={coluna.chave}>
                        {coluna.valor}
                    </th>
                )
            }
            {
                props.acoes && <th className='right'>
                    Ações
                </th>
            }
        </tr>
        </thead>

        <tbody>
        {
            dadosOrganizados.map((linha, index) => {
                return <tr key={index}>
                    {
                        Object
                            .keys(linha)
                            .map((item, indexLinha) =>
                                item !== '$original'
                                    ? <td key={linha.$original.codigo + indexLinha}
                                          className={cabecalhoIndexado[item].alinhadoDireita ? 'right' : ''}>

                                        {linha[item]}
                                    </td>
                                    : null)
                    }
                    {
                        props.acoes
                        && <td className='acoes right'>
                            {
                                props.editar
                                && <Button onClick={() => props.editar && props.editar(linha.$original)}>
                                    Editar
                                </Button>
                            }
                            {
                                props.detalhes
                                && <Button onClick={() => props.detalhes && props.detalhes(linha.$original)}>
                                    Detalhar
                                </Button>
                            }
                            {
                                props.deletar
                                && <Button onClick={() => props.deletar && props.deletar(linha.$original)}>
                                    Excluir
                                </Button>
                            }
                        </td>
                    }
                </tr>
            })
        }
        </tbody>
    </table>
}

export default Table;























