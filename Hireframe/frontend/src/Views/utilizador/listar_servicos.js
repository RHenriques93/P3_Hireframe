import React, { Component } from 'react';
import { Container, Button } from 'reactstrap';
import { NavLink } from "react-router-dom";
import axios from 'axios';


class ListaServicosUtilizador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaServicosUtilizador: [],
      id_utilizador: "",
  
    }
  }

  //lifecycle do component
  componentDidMount() {
    let utilizadorId = this.props.match.params.id;
    const url = "http://localhost:3001/api/v1/utilizador_servico/" + utilizadorId;;

    axios
      .get(url)
      .then((res) => {
        if (res.status !== "500" && res.data.success) {
          //const data = res.data.data;
          const data = res.data.dados;
          const dados = res.data.dados[0];
          this.setState({ 
            listaServicosUtilizador: data,
            id_utilizador: dados.id_utilizador, });
        } else if (res.status === "500") {
          console.log("Erro");
        }
      })
      .catch((error) => {
        console.log("Error Msg: " + error);
      });
  }

          
    



  
  render() {
    return (

      <div class="container py-3 mt-4">

        <nav aria-label="breadcrumb">
          <ol class="breadcrumb grad">
            <li class="breadcrumb-item"><a class="text-white font-weight-bold" href={"/utilizador/user_page/" + this.state.id_utilizador  }>Perfil</a></li>
            <li class="breadcrumb-item active text-light" aria-current="page">Seus Serviços</li>
          </ol>
        </nav>

        <section class="mb-4">
          <header class="col-md-12 mb-4">
            <h2 class="text-center text-dark">Os Seus Serviços</h2>
            <span class="underline mb-3"></span>
          </header>


          <table >
            <thead>
              <tr >
                <th className="grad-txt">ID do Serviço</th>
                <th className="grad-txt">Área</th>
                <th className="grad-txt">Subarea</th>
                <th className="grad-txt">Descrição</th>
                <th className="grad-txt">Preço Base</th>
                <th className="grad-txt">Preço Padrão</th>
                <th className="grad-txt">Preço Premium</th>
                <th className="grad-txt"></th>
                <th className="grad-txt"></th>
              </tr >
            </thead>
            <tbody>
              {this.preencheDados()}
            </tbody>

          </table >

          {/*<div class="row justify-content-center"><div class="col-md-5 text-center p-2"> <h1>Ainda não tem serviços associados à sua conta. Associe um serviço.</div></div>';*/}

          <div class="row justify-content-center">
            <div class="col-md-4 mt-4">
              <button class="btn btn-grad grad col-12 mb-2"><h5><a class="text-light" href={"/servico/create/" + this.state.id_utilizador}>Associar Serviço</a></h5></button>
            </div>
          </div>

        </section>

      </div>

    );
  }

  preencheDados() {

    return this.state.listaServicosUtilizador.map((data, index) => {
        return (
            <tr key={index}>
                <td className="text-dark">{data.id_servico}</td>
                <td className="text-dark">{/*data.subarea.area.nome*/}</td>
                <td className="text-dark">{data.subarea.nome}</td>
                <td className="text-dark">{data.descricao}</td>
                <td className="text-dark">{data.preco_servico.base} €</td>
                <td className="text-dark">{data.preco_servico.padrao} €</td>
                <td className="text-dark">{data.preco_servico.premium} €</td>
            
                <td>
                    <NavLink to={"/servico/edit/" + data.id_servico}>
                        <Button color="info">Editar</Button>
                    </NavLink>
                </td>
                <td>
                    <Button color="danger">Apagar</Button>
                </td>
            </tr>
        );
    });
};



}



export default ListaServicosUtilizador;