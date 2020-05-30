import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";


class EditaUtilizador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id_utilizador: "",
            nome: "",
            username: "",
            email: "",
            data_nascimento: "",
            pass: "",
            id_tipo: "",
            biografia: "",
            imagem: "",
            genero: "",
        };
    }

    componentDidMount() {
        let utilizadorId = this.props.match.params.id;
        const url = "http://localhost:3001/api/v1/utilizador/" + utilizadorId;

        axios
            .get(url)
            .then((res) => {
                if (res.data.success) {
                    //dados recebidos
                    //console.log(JSON.stringify(res.data.dados[0]));

                    const dados = res.data.dados[0];
                    this.setState({
                        id_utilizador: dados.id_utilizador,
                        nome: dados.nome,
                        username: dados.username,
                        email: dados.email,
                        data_nascimento: dados.data_nascimento,
                        pass: dados.pass,
                        id_tipo: dados.id_tipo,
                        nome_tipo: dados.tipo_utilizador.nome_tipo,
                        biografia: dados.biografia,
                        imagem: dados.imagem,
                        genero: dados.genero,
                    });
                } else {
                    console.log("Erro");
                }
            })
            .catch((error) => {
                console.log("Error Msg: " + error);
            });
    }

    render() {
        return (
            <Container>
                <h1>Atualizar Perfil de Utilizador</h1>
                <Form responsive="true">

                    <FormGroup row>
                        <Input type="hidden" name="id" id="id" value={this.state.id_utilizador}
                            onChange={(value) => this.setState({ id_utilizador: value.target.value })}
                        />
                    </FormGroup>

                    <FormGroup row>
                        <Label for="nome" size="lg">Nome:</Label>
                        <Input type="text" name="nome" id="nome" bsSize="lg" value={this.state.nome}
                            onChange={(value) => this.setState({ nome: value.target.value })}
                        />
                    </FormGroup>

                    <FormGroup row>
                        <Label for="username" size="lg">Username:</Label>
                        <Input type="text" name="username" id="username" bsSize="lg" value={this.state.username}
                            onChange={(value) => this.setState({ username: value.target.value })}
                        />
                    </FormGroup>

                    <FormGroup row>
                        <Label for="imagem" size="lg">Foto de Perfil:</Label>
                        <Input type="text" name="imagem" id="imagem" bsSize="lg" value={this.state.imagem}
                            onChange={(value) => this.setState({ imagem: value.target.value })}
                        />
                    </FormGroup>

                    <FormGroup row>
                        <Label for="datanascimento" size="lg">Data de Nascimento:</Label>
                        <Input type="date" name="datanascimento" id="datanascimento" bsSize="lg" value={this.state.data_nascimento}
                            onChange={(value) => this.setState({ data_nascimento: value.target.value })}
                        />
                    </FormGroup>

                    <FormGroup row>
                        <Label for="genero" size="lg">Género:</Label>
                        <Input type="select" name="genero" id="genero" onChange={(value) => this.setState({ genero: value.target.value })}>

                               <option value={this.state.genero}>{this.state.genero}</option>

                             <option value="Masculino">Masculino</option>

                           <option value="Feminino">Feminino</option>
                           
                        </Input>

                    </FormGroup>

                    <FormGroup row>
                        <Label for="tipo_utilizador" size="lg">Tipo Utilizador</Label>
                        <Input type="select" name="tipo_utilizador" id="tipo_utilizador"  onChange={(value) => this.setState({ id_tipo: value.target.value })}>
                        <option value={this.state.nome_tipo}>{this.state.nome_tipo}</option>
                            <option value="1">Cliente</option>
                            <option value="2">Trabalhador</option>
                            <option value="3">Cliente e Trabalhador</option>
                        </Input>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="biografia" size="lg">Biografia:</Label>
                        <Input type="text" name="biografia" id="biografia" bsSize="lg" value={this.state.biografia}
                            onChange={(value) => this.setState({ biografia: value.target.value })}
                        />
                    </FormGroup>

                    <FormGroup row>
                        <Label for="email" size="lg">Email:</Label>
                        <Input type="email" name="email" id="email" bsSize="lg" value={this.state.email}
                            onChange={(value) => this.setState({ email: value.target.value })}
                        />
                    </FormGroup>

                    <FormGroup row>
                        <Label for="telefone" size="lg">Password</Label>
                        <Input type="password" name="password" id="password" bsSize="lg" value={this.state.pass}
                            onChange={(value) => this.setState({ pass: value.target.value })}
                        />
                    </FormGroup>

                    <Button color="primary" size="lg" onClick={() => this.atualizaUtilizador()}>Editar Utilizador</Button>
                </Form>
            </Container>
        );
    }

    atualizaUtilizador() {
        if (this.state.id_utilizador !== "" && this.state.nome !== "") {
          const url = "http://localhost:3001/api/v1/utilizador/"+this.state.id_utilizador;
          const dados = {
            id_utilizador: this.state.id_utilizador,
            nome: this.state.nome,
            username: this.state.username,
            email: this.state.email,
            data_nascimento: this.state.data_nascimento,
            pass: this.state.pass,
            id_tipo: this.state.id_tipo,
            biografia: this.state.biografia,
            imagem: this.state.imagem,
            genero: this.state.genero,
          };
    
          axios
            .put(url, dados)
            .then((response) => {
              console.log(response.data);
              if (response.status === 200 && response.data.success === true) {
                alert("Utilizador atualizado com sucesso. [ID: "+ response.data.dados+"]");
                this.props.history.push('/');
              } else {
                alert("Ocorreu um erro ao tentar editar os dados do utilizador. Tente novamente mais tarde.");
              }
            })
            .catch((error) => {
              console.log("Error Msg: " + error);
              alert("Ocorreu um erro ao tentar editar os dados do utilizador. Tente novamente mais tarde.");
              this.props.history.push('/');
            });
        }
      }
}

export default EditaUtilizador;