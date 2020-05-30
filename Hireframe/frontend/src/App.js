import React from 'react';
//import logo from './logo.svg';
import './App.css';



import ListaUtilizadores from './Views/utilizador/list';
import NovoUtilizador from './Views/utilizador/create';
import EditaUtilizador from './Views/utilizador/edit';
import UserPage from './Views/utilizador/user_page';
import UserSettings from './Views/utilizador/user_settings';

import ListaServicos from './Views/servico/list';
import NovoServico from './Views/servico/create';
import EditaServico from './Views/servico/edit';
import Servicos_Subarea from './Views/servico/servicos_subarea';
import Servico_Detail from './Views/servico/servico_detail';

import ListaServicosUtilizador from './Views/utilizador/listar_servicos';

import ListaRequisicoesUtilizador from './Views/requisicao/listar_requisicoes';

import ListaRequisicoes from './Views/requisicao/list';
import NovaRequisicao from './Views/requisicao/create';
import EditaRequisicao from './Views/requisicao/edit';
import Requisicao from './Views/requisicao/detail';

import ListaAreas from './Views/area/list';
import Subarea_area from './Views/subarea/detail';

import FooterPage from './Components/inc/FooterPage.js';
import Header from './Components/inc/Header.js';
import Sobre from './Components/inc/Sobre.js';
import Contacto from './Components/inc/Contacto.js';
import Main from './Components/inc/Main.js';

import Login from './Components/inc/Login.js';

import { BrowserRouter as Router, Route} from 'react-router-dom';
import Sugestoes from './Components/inc/Sugestoes';


function App() {


  return (
    <Router>
      <div>
      <Header/>

      </div>
      <div className="App">
        <Route path="/utilizadores" exact component={ListaUtilizadores} />
        <Route path="/utilizador/registar" component={NovoUtilizador} />
        <Route path="/utilizador/edit/:id" component={EditaUtilizador} />
        <Route path="/utilizador/user_page/:id" exact component={UserPage} />
        <Route path="/utilizador/user_settings/:id" exact component={UserSettings} />

        <Route path="/servicos/" component={ListaServicos} />
        <Route path="/servico/create/:id" component={NovoServico} />
        <Route path="/servico/edit/:id" component={EditaServico} />
        <Route path="/servico/servicos_subarea/:id" component={Servicos_Subarea} />
        <Route path="/servico_detail/:id" component={Servico_Detail} />

        <Route path="/utilizador/servicos_utilizador/:id" component={ListaServicosUtilizador} />

        <Route path="/utilizador/requisicoes_utilizador/:id" component={ListaRequisicoesUtilizador} />

        <Route path="/requisicoes/" component={ListaRequisicoes} />
        <Route path="/requisicao/create/:id" component={NovaRequisicao} />
        <Route path="/requisicao/edit/:id" component={EditaRequisicao} />
        <Route path="/requisicao/detail/:id" component={Requisicao} />

        <Route path="/areas/" component={ListaAreas} />
        <Route path="/subarea_area/:id" component={Subarea_area} />

        <Route path="/index" component={Main} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/contacto" component={Contacto} />

        <Route path="/login" component={Login} />
      </div>
      <div>
      <FooterPage/>
      </div>
    </Router>

  );
}

export default App;
