import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

class NovoServico extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_utilizador: "",
      id_subarea: "",
      descricao: "",
      base: "",
      padrao: "",
      premium: "",

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
        <br></br> <br></br>
        <h1 className="grad-txt">Associar Serviço</h1>
        <Form responsive>
          <FormGroup row>
            <Input type="hidden" name="descricao" id="descricao" bsSize="lg" value={this.state.id_utilizador}
              onChange={(value) => this.setState({ id_utilizador: value.target.value })} disabled/>
          </FormGroup>
          <FormGroup row>
            <Label className="grad-txt" for="tipo_servico" size="lg">Tipo de Serviço</Label>
            <Input type="select" name="tipo_servico" id="tipo_servico" value={this.state.id_subarea}
              onChange={(value) => this.setState({ id_subarea: value.target.value })}>

              <optgroup className="text-dark" label="Design">
                <option className="text-dark" value="6">Logotipo</option>
                <option className="text-dark" value="7">Flyer</option>
                <option className="text-dark" value="8">Ilustração</option>
              </optgroup>
              <optgroup className="text-dark" label="Video">
                <option className="text-dark" value="9">Vídeo Institucional</option>
                <option className="text-dark" value="10">Animação de Logotipo</option>
                <option className="text-dark" value="11">Edição de Vídeo</option>
                <option className="text-dark" value="12">Motion Graphics</option>
              </optgroup>
              <optgroup className="text-dark" label="Programação">
                <option className="text-dark" value="13">Web Design</option>
                <option className="text-dark" value="14">Mobile Apps</option>
              </optgroup>
              <optgroup className="text-dark" label="Áudio">
                <option className="text-dark" value="15">Produção</option>
                <option className="text-dark" value="16">Mixagem e Masterização</option>
                <option className="text-dark" value="17">Foley / Sonoplastia</option>
              </optgroup>
              <optgroup className="text-dark" label="Fotografia">
                <option className="text-dark" value="18">Publicidade</option>
                <option className="text-dark" value="19">Eventos</option>
              </optgroup>
            </Input>
          </FormGroup>
          <FormGroup row>
            <Label className="grad-txt" for="descricao" size="lg">Descrição:</Label>
            <Input type="text" name="descricao" id="descricao" bsSize="lg" value={this.state.descricao}
              onChange={(value) => this.setState({ descricao: value.target.value })} />
          </FormGroup>
          <FormGroup row>
            <Label className="grad-txt" for="preco_base" size="lg">Preço Base:</Label>
            <Input type="number" name="base" id="base" bsSize="lg" value={this.state.base}
              onChange={(value) => this.setState({ base: value.target.value })} />
          </FormGroup>
          <FormGroup row>
            <Label className="grad-txt" for="preco_padrao" size="lg">Preço Padrão:</Label>
            <Input type="number" name="base" id="padrao" bsSize="lg" value={this.state.padrao}
              onChange={(value) => this.setState({ padrao: value.target.value })} />
          </FormGroup>
          <FormGroup row>
            <Label className="grad-txt" for="preco_premieum" size="lg">Preço Padrão:</Label>
            <Input type="number" name="premium" id="premium" bsSize="lg" value={this.state.premium}
              onChange={(value) => this.setState({ premium: value.target.value })} />
          </FormGroup>

          <Button color="primary" size="lg" onClick={() => this.criaServico()}>Criar Serviço</Button>
        </Form>
        <br></br> <br></br>
      </Container>
    );
  }
  criaServico() {
    if (this.state.nome !== "") {
      const url = "http://localhost:3001/api/v1/servico";
      const dados = {
        id_subarea: this.state.id_subarea,
        id_utilizador: this.state.id_utilizador,
        descricao: this.state.descricao,
        base: this.state.base,
        padrao: this.state.padrao,
        premium: this.state.premium,


      };

      axios
        .post(url, dados)
        .then((response) => {
          if (response.data.success === true) {
            alert("Serviço registado com sucesso. [ID: " + response.data.dados.id_servico + "]");
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
export default NovoServico;