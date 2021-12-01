import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Pessoas from '../Pessoas/Pessoas';
import PessoasEditar from '../Pessoas/PessoasEditar';
import Projetos from '../Projetos/Projetos';
import ProjetosEditar from '../Projetos/ProjetosEditar';
import './AreaDados.css';
 
export default function AreaDados() {
  return (
    <div id="idArea" className="areaDados">
      <Switch>
        <Route exact path="/pessoas" component={Pessoas}></Route>
        <Route exact path="/pessoas/:id" component={PessoasEditar}></Route>
        <Route exact path="/projetos" component={Projetos}></Route>
        <Route exact path="/projetos/:id" component={ProjetosEditar}></Route>

      </Switch>

    </div>
  );
}

