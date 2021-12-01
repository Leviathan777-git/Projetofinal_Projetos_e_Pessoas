import React from 'react';
import { Link } from 'react-router-dom';

import './TabelasProjetos.css';

export default function Tabela(props) {

  function getLinhas() {

    const arrayRegistros = props.items;
    console.log(arrayRegistros);

    return arrayRegistros.map((item, i) => {

      return (
        <tr className={i % 2 === 0 ? "par" : "impar"} key={item.prj_codigo}>
          <td> {item.prj_codigo} </td>
          <td> {item.prj_tipo} </td>
          <td> {item.prj_descricao} </td>
          <td> {item.prj_iniciativa} </td>
          <td> {item.prj_dtinicio} </td>
          <td> {item.pes_codigo} </td>
  

          <td id="editar"> <a className="btn btn-primary btn-block" href={props.chave + item.prj_codigo} > Editar </a></td>

          <td> <Link to={props.chave + item.prj_codigo}> <i className="bi bi-clipboard-data"> </i> </Link> </td>

          <td> <i className="bi bi-trash"></i> </td>
        </tr>
      )
    })
  }

  return (
    <div className="tabela">
      <table id="tabela" className="table table-hover">
        <thead id="cabecalho_rel">
          <tr style={{ textAlign: 'center' }}>
            <th scope="col"> Código </th>
            <th scope="col"> Tipo </th>
            <th scope="col"> Descrição </th>
            <th scope="col"> Iniciativa </th>
            <th scope="col"> Data de Inicio </th>
            <th scope="col"> Codigo Da Pessoa </th>
            <th scope="col"><a href={props.chave + '0'} className="btn btn-success btn-block">Novo Projeto</a></th>
          </tr>
        </thead>
        <tbody>
          {getLinhas()}
        </tbody>
      </table>
    </div>
  )

}