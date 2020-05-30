import React, { Component } from 'react';
import { Container, Button } from 'reactstrap';
import { NavLink } from "react-router-dom";
import axios from 'axios';


class ListaRequisicoesUtilizador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaRequisicoesUtilizador: [],
      id_utilizador: "",
  
    }
  }

  //lifecycle do component
  componentDidMount() {
    let utilizadorId = this.props.match.params.id;
    const url = "http://localhost:3001/api/v1/utilizador_requisicao/" + utilizadorId;;

    axios
      .get(url)
      .then((res) => {
        if (res.status !== "500" && res.data.success) {
          //const data = res.data.data;
          const data = res.data.dados;
          const dados = res.data.dados[0];
          this.setState({ 
            listaRequisicoesUtilizador: data,
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
            <li class="breadcrumb-item active text-light" aria-current="page">Suas Requisições</li>
          </ol>
        </nav>
        <br></br><br></br>
        <section class="mb-4">
          <header class="col-md-12 mb-4">
            <h2 class="text-center text-dark">As Suas Requisições</h2>
            <span class="underline mb-3"></span>
          </header>


          <table >
            <thead>
              <tr >
                <th className="grad-txt">ID da Requisição</th>
                <th className="grad-txt">Nome do Projeto</th>
                <th className="grad-txt">Tipo de Serviço</th>
                <th className="grad-txt">Descrição</th>
                <th className="grad-txt">Quantia que pretende gastar?</th>
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
              <button class="btn btn-grad grad col-12 mb-2"><h5><a class="text-light" href={"/requisicao/create/" + this.state.id_utilizador}>Associar Requisição</a></h5></button>
            </div>
          </div>

        </section>
        <br></br><br></br>

      </div>

    );
  }

  preencheDados() {

    return this.state.listaRequisicoesUtilizador.map((data, index) => {
        return (
            <tr key={index}>
                <td className="text-dark">{data.id_requisicao}</td>
                <td className="text-dark">{data.nome_projeto}</td>
                <td className="text-dark">{data.subarea.nome}</td>
                <td className="text-dark">{data.descricao}</td>
                <td className="text-dark">{data.preco} €</td>
   
            
                <td>
                    <NavLink to={"/requisicao/edit/" + data.id_requisicao}>
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



export default ListaRequisicoesUtilizador;