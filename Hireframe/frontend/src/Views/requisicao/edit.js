import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

class EditaRequisicao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id_requisicao: "",
            id_utilizador: "",
            id_subarea: "",
            descricao: "",
            nome_projeto: "",
            preco: "",
            img_req: "",
            
           
        };
    }
    componentDidMount() {
        let requisicaoId = this.props.match.params.id;
        const url = "http://localhost:3001/api/v1/requisicao/" + requisicaoId;

        axios
            .get(url)
            .then((res) => {
                if (res.data.success) {
                    //dados recebidos
                    //console.log(JSON.stringify(res.data.dados[0]));

                    const dados = res.data.dados[0];
                    this.setState({
                        id_requisicao: dados.id_requisicao,
                        id_utilizador: dados.id_utilizador,
                        id_subarea: dados.id_subarea,
                        descricao: dados.descricao,
                        nome_projeto: dados.nome_projeto,
                        preco: dados.preco,
                        img_req: dados.img_req,
                        nome_subarea: dados.subarea.nome,

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
                 <br></br><br></br>
                <h1 className="grad-txt">Editar Requisição</h1>
                <Form responsive>
                    <FormGroup row>
                        <Input type="hidden" name="id" id="id" value={this.state.id_requisicao}
                            onChange={(value) => this.setState({ id_requisicao: value.target.value })}
                        />
                    </FormGroup>
                    <FormGroup row>
                        <Label className="grad-txt" for="nome_projeto" size="lg">Nome do Projeto:</Label>
                        <Input type="text" name="nome_projeto" id="nome_projeto" bsSize="lg" value={this.state.nome_projeto}
                            onChange={(value) => this.setState({ nome_projeto: value.target.value })}
                        />
                    </FormGroup>
                    <FormGroup row>
                        <Label className="grad-txt" for="tipo_servico" size="lg">Tipo de Serviço</Label>
                        <Input type="select" name="tipo_servico" id="tipo_servico"
                            onChange={(value) => this.setState({ id_subarea: value.target.value })}>
                            <option value={this.state.nome_subarea} selected>{this.state.nome_subarea}</option>

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
                            onChange={(value) => this.setState({ descricao: value.target.value })}
                        />
                    </FormGroup>
                    <FormGroup row>
                        <Label className="grad-txt" for="preco" size="lg">Quantia que pretende gastar?</Label>
                        <Input type="number" name="preco" id="preco" bsSize="lg" value={this.state.preco}
                            onChange={(value) => this.setState({ preco: value.target.value })}
                        />
                    </FormGroup>
                    <FormGroup row>
                    <Label className="grad-txt" for="imagem" size="lg">Imagem do Projeto</Label>
                      <img src={this.state.img_req} className="rounded-circle border border-grad" width="200px" height="200px" alt="Imagem do Projeto" />
                      <input type="file" name="imagem" className="form-control-file my-3 btn btn-primary btn-sm" accept="image/x-png,image/jpeg"
                        onChange={(value) => this.setState({ img_req: value.target.value })} />
                    </FormGroup>

                    <Button color="primary" size="lg" onClick={() => this.atualizaRequisicao()}>Editar Requisição</Button>
                </Form>

                <br></br><br></br>
            </Container>
        );
    }
    atualizaRequisicao() {
        if (this.state.id_requisicao !== "") {
          const url = "http://localhost:3001/api/v1/requisicao/"+this.state.id_requisicao;
          const dados = {
            id_requisicao: this.state.id_requisicao,
            id_utilizador: this.state.id_utilizador,
            id_subarea: this.state.id_subarea,
            descricao: this.state.descricao,
            nome_projeto: this.state.nome_projeto,
            preco: this.state.preco,
            img_req: this.state.img_req,
            

          };
    
          axios
            .put(url, dados)
            .then((response) => {
              console.log(response.data);
              if (response.status === 200 && response.data.success === true) {
                alert("Requisição atualizada com sucesso. [ID: "+ response.data.dados+"]");
                this.props.history.push('/');
              } else {
                alert("Ocorreu um erro ao tentar editar os dados da requisição. Tente novamente mais tarde.");
              }
            })
            .catch((error) => {
              console.log("Error Msg: " + error);
              alert("Ocorreu um erro ao tentar editar os dados da requisição. Tente novamente mais tarde.");
              this.props.history.push('/');
            });
        }
      }
}

export default EditaRequisicao;