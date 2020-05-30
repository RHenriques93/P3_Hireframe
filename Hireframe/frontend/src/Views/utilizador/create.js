import React, { Component } from 'react';
import axios from "axios";
import { FaSign } from 'react-icons/fa';

class NovoUtilizador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      username: "",
      email: "",
      data_nascimento: "",
      pass: "",
      id_tipo: "",
      genero: "",

    };
  }

  render() {
    return (
      
           <div className="container">
   <div className="row justify-content-center">
    <div className="col-md-7">
   
        <div className="row area justify-content-center">
            <div className="col-12 text-center p-2">
                <h1 className="grad-txt">Criar Registo</h1>
            </div>
            <div className="col-12 text-center d-flex justify-content-center">
                <hr className="divider"/>
            </div>

            <form className="col-6 text-center justify-content-center">
                <input type="text" className="form-control" name="nome" placeholder="Nome e Apelido" required value={this.state.nome}
              onChange={(value) => this.setState({ nome: value.target.value })}/>

                <select className="custom-select mt-2 text-secondary w-100 align-content-left" name="genero" id="genero" value={this.state.genero} onChange={(value) => this.setState({ genero: value.target.value })}>
                <option className="bg-dark" value="" disabled selected>Genero</option>
              <option className="text-secondary" value="Masculino">Masculino</option>
              <option className="text-secondary" value="Feminino">Feminino</option>
            </select>


                <input type="date" className="form-control mt-2" name="data_nascimento" placeholder="Data de Nascimento" required value={this.state.data_nascimento}
              onChange={(value) => this.setState({ data_nascimento: value.target.value })}/>
                

            <select className="custom-select mt-2 text-secondary w-100 align-content-left" name="tipo_utilizador" id="tipo_utilizador" required value={this.state.id_tipo} onChange={(value) => this.setState({ id_tipo: value.target.value })}>
              <option className="bg-dark" value="" disabled selected>Tipo de Registo</option>
              <option className="text-secondary" value="1">Cliente</option>
              <option className="text-secondary" value="2">Trabalhador</option>
              <option className="text-secondary" value="3">Cliente e Trabalhador</option>
            </select>
     

            <input type="text" className="form-control"  name="username" id="username"  placeholder="Username"  value={this.state.username}
              onChange={(value) => this.setState({ username: value.target.value })} />

                <input type="email" className="form-control mt-2" name="email" placeholder="Email" required value={this.state.email}
              onChange={(value) => this.setState({ email: value.target.value })} />

                <input type="password" className="form-control mt-2" name="pass" placeholder="Password" required value={this.state.pass}
              onChange={(value) => this.setState({ pass: value.target.value })} />

                <button type="submit" className="submit" class="btn btn-grad grad text-center m-2" onClick={() => this.criaUtilizador()}><FaSign /> Registar</button>
            </form>


            <form className="col-8 text-center d-flex justify-content-center m-4 vdivider">
            <a href="/login" className="lead grad-txt">Já tenho conta</a>
            </form>
        </div>
    </div>
    </div>
    </div>

  
    );
  }
  criaUtilizador() {
    if (this.state.nome !== "") {
      const url = "http://localhost:3001/api/v1/utilizador";
      const dados = {
        nome: this.state.nome,
        username: this.state.username,
        data_nascimento: this.state.data_nascimento,
        id_tipo: this.state.id_tipo,
        email: this.state.email,
        pass: this.state.pass,
        genero: this.state.genero,

      };

      axios
        .post(url, dados)
        .then((response) => {
          if (response.data.success === true) {
            alert("Utilizador registado com sucesso. [ID: " + response.data.dados.id_utilizador + "]");
            this.props.history.push('/');
          } else {
            alert("2: " + response.data.dados);
          }
        })
        .catch((error) => {
          console.log("Error Msg: " + error);
        });
    }
  }
}


export default NovoUtilizador;