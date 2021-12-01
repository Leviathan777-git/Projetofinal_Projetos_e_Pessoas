import React from "react"
import './Projetos.css';
import urlapi from "../../services/api.js"
import Tabela from "../Tabelas/TabelaProjetos";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Projetos() {
  const [projetos, setProjetos] = useState([])

  useEffect(() => {
    urlapi.get('projetos')
      .then(response => setProjetos(response.data));
  }, []
  )

  return (
    <>
      <div id="idProjetos" className="projetos">
        <div id="corpo_rel">
          <legend> Registros de Projetos Cadastrados</legend>
          <Link to="/projetos/0" value={'I'}>incluir Novo Projeto</Link>

          <div>

            <Tabela
              items={projetos}
              chave={'/projetos/'}
            />

          </div>
        </div>
      </div>
    </>
  );
}

export default Projetos;

