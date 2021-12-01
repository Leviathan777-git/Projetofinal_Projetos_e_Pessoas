import React from 'react';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './MenuHorizontal.css';

export default function MenuHorizontal() {
  /*
    var elemento = document.getElementById('idArea')
  //  elemento.innerHTML = <Autores />
    elemento = <Autores />
  */
  return (

    <div>
      <div className="menuHorizontal">
        <nav className="navMenu">
          <ul>
            <li> <Link to="/"> Início </Link> </li>
            <li> <Link to="/pessoas"> Pessoas </Link> </li>
            <li> <Link to="/projetos"> Projetos </Link> </li>
            <li> <Link to="/usuarios"> Usuários </Link> </li>
            <li> <Link to="/configuracoes"> Configurações </Link> </li>
          </ul>
        </nav>

      </div>

    </div>

  );
}


