import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

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
      <Container>
        <h1>Registo de Utilizador</h1>
        <Form responsive = "true">
          <FormGroup row>
            <Label for="nome" size="lg">Nome:</Label>
            <Input type="text" name="nome" id="nome" bsSize="lg" value={this.state.nome}
              onChange={(value) => this.setState({ nome: value.target.value })} />
          </FormGroup>
          <FormGroup row>
            <Label for="username" size="lg">Username:</Label>
            <Input type="text" name="username" id="username" bsSize="lg" value={this.state.username}
              onChange={(value) => this.setState({ username: value.target.value })} />
          </FormGroup>

          <FormGroup row>
            <Label for="genero" size="lg">Género:</Label>
            <Input type="select" name="genero" id="genero" value={this.state.genero} onChange={(value) => this.setState({ genero: value.target.value })}>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
            </Input>
          </FormGroup>

          <FormGroup row>
            <Label for="datanascimento" size="lg">Data de Nascimento:</Label>
            <Input type="date" name="datanascimento" id="datanascimento" bsSize="lg" value={this.state.data_nascimento}
              onChange={(value) => this.setState({ data_nascimento: value.target.value })}/>
          </FormGroup>

          <FormGroup row>
            <Label for="tipo_utilizador" size="lg">Tipo Utilizador</Label>
            <Input type="select" name="tipo_utilizador" id="tipo_utilizador" value={this.state.id_tipo} onChange={(value) => this.setState({ id_tipo: value.target.value })}>
              <option value="1">Cliente</option>
              <option value="2">Trabalhador</option>
              <option value="3">Cliente e Trabalhador</option>
            </Input>
          </FormGroup>


          <FormGroup row>
            <Label for="email" size="lg">Email:</Label>
            <Input type="email" name="email" id="email" bsSize="lg" value={this.state.email}
              onChange={(value) => this.setState({ email: value.target.value })} />
          </FormGroup>
          <FormGroup row>
            <Label for="telefone" size="lg">Password</Label>
            <Input type="password" name="password" id="password" bsSize="lg" value={this.state.pass}
              onChange={(value) => this.setState({ pass: value.target.value })} />
          </FormGroup>
          <Button color="primary" size="lg" onClick={() => this.criaUtilizador()}>Novo Utilizador</Button>
        </Form>
      </Container>
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