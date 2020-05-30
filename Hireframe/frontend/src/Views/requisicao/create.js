import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";


class NovaRequisicao extends Component {

    constructor(props) {
        super(props);
        this.state = {
          id_utilizador: "",
          id_subarea: "",
          descricao: "",
          nome_projeto: "",
          preco: "",
          img_req: "",
        
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
                <h1 className="grad-txt">Associar Requisição</h1>
                <Form responsive>
                <FormGroup row>
                        <Input type="hidden" name="id_utilizador" id="id_utilizador" bsSize="lg" value={this.state.id_utilizador}
              onChange={(value) => this.setState({ id_utilizador: value.target.value })} disabled />
                    </FormGroup>
                <FormGroup row>
                        <Label className="grad-txt"  for="nome_projeto" size="lg">Nome do Projeto:</Label>
                        <Input type="text" name="nome_projeto" id="nome_projeto" bsSize="lg" value={this.state.nome_projeto}
              onChange={(value) => this.setState({ nome_projeto: value.target.value })} />
                    </FormGroup>
                    <FormGroup row>
                        <Label className="grad-txt"  for="tipo_servico" size="lg">Tipo de Serviço</Label>
                        <Input type="select" name="tipo_servico" id="tipo_servico"
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
                        <Label className="grad-txt"  for="descricao" size="lg">Descrição:</Label>
                        <Input type="text" name="descricao" id="descricao" bsSize="lg" value={this.state.descricao}
              onChange={(value) => this.setState({ descricao: value.target.value })} />
                    </FormGroup>
                    <FormGroup row>
                        <Label className="grad-txt"  for="preco" size="lg">Quantia que pretende gastar?</Label>
                        <Input type="number" name="preco" id="preco" bsSize="lg" value={this.state.preco}
              onChange={(value) => this.setState({ preco: value.target.value })} />
                    </FormGroup>
                    <FormGroup row>
                        <Label className="grad-txt"  for="imagem" size="lg">Imagem do Projeto</Label>
                        <Input type="file" name="img_req" id="img_req" bsSize="lg" value={this.state.img_req}
              onChange={(value) => this.setState({ img_req: value.target.value })} />
                    </FormGroup>
             
                    <Button color="primary" size="lg" onClick={() => this.criaRequisicao()}>Criar Requisição</Button>
                </Form>
                <br></br> <br></br>
            </Container>
        );
    }
    criaRequisicao() {
        if (this.state.nome !== "") {
          const url = "http://localhost:3001/api/v1/requisicao";
          const dados = {
            id_subarea: this.state.id_subarea,
            id_utilizador: this.state.id_utilizador,
            descricao: this.state.descricao,
            nome_projeto: this.state.nome_projeto,
            preco: this.state.preco,
            img_req: this.state.img_req,
        
      
          };
    
          axios
            .post(url, dados)
            .then((response) => {
              if (response.data.success === true) {
                alert("Requisição criada com sucesso. [ID: "+ response.data.dados.id_requisicao+"]");
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

export default NovaRequisicao;