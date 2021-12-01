import React from "react"
import './Pessoas.css';
import urlapi from "../../services/api.js"
import Tabela from "../Tabelas/TabelaPessoas";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Pessoas() {
  const [pessoas, setpessoas] = useState([])

  //  console.log("Executando fetch..")
  
  useEffect(() => {
    urlapi.get('pessoas')
      .then(response => setpessoas(response.data));
  }, []
  )

  return (
    <>
        <div id="idpessoas" className="pessoas">
          <div id="corpo_rel">
            <legend> Registros de Pessoas Cadastrados</legend>
            <Link to="/pessoas/0" value={'I'}>incluir Nova Pessoa</Link>

            <div>

              <Tabela
                items={pessoas}
                chave={'/pessoas/'}
              />

            </div>
          </div>
        </div>
    </>
  );
}

export default Pessoas;

