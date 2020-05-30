import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";



class EditaServico extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id_servico: "",
            id_utilizador: "",
            id_subarea: "",
            descricao: "",
            base: "",
            padrao: "",
            premium: "",



        };
    }

    componentDidMount() {
        let servicoId = this.props.match.params.id;
        const url = "http://localhost:3001/api/v1/servico/" + servicoId;

        axios
            .get(url)
            .then((res) => {
                if (res.data.success) {
                    //dados recebidos
                    //console.log(JSON.stringify(res.data.dados[0]));

                    const dados = res.data.dados[0];
                    this.setState({
                        id_servico: dados.id_servico,
                        id_utilizador: dados.id_utilizador,
                        id_subarea: dados.id_subarea,
                        descricao: dados.descricao,
                        id_preco_servico: dados.preco_servico.id_preco_servico,
                        base: dados.preco_servico.base,
                        nome_subarea: dados.subarea.nome,
                        padrao: dados.preco_servico.padrao,
                        premium: dados.preco_servico.premium,
                        id_serv: dados.preco_servico.id_servico,

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
            <div class="container">
                <br></br><br></br>
                <h1 className="grad-txt">Editar Serviço Associado</h1>
                <Form responsive>
                    <FormGroup row>
                        <Input type="hidden" name="id" id="id" value={this.state.id_servico}
                            onChange={(value) => this.setState({ id_servico: value.target.value })} />
                    </FormGroup>
                    <FormGroup row>
                        <Input type="hidden" name="id" id="id" value={this.state.id_preco_servico}
                            onChange={(value) => this.setState({ id_preco_servico: value.target.value })} />
                    </FormGroup>

                    <FormGroup row>
                        <Label className="grad-txt" for="tipo_servico" size="lg">Tipo de Serviço</Label>
                        <Input type="select" name="tipo_servico" id="tipo_servico"
                            onChange={(value) => this.setState({ id_subarea: value.target.value })}>
                            <option className="grad-txt" value={this.state.nome_subarea} selected>{this.state.nome_subarea}</option>

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
                        <Label className="grad-txt" for="preco_base" size="lg">Preço Base:</Label>
                        <Input type="number" name="base" id="base" bsSize="lg" value={this.state.base}
                            onChange={(value) => this.setState({ base: value.target.value })}
                        />
                    </FormGroup>
                    <FormGroup row>
                        <Label className="grad-txt" for="preco_padrao" size="lg">Preço Padrão:</Label>
                        <Input type="number" name="base" id="padrao" bsSize="lg" value={this.state.padrao}
                            onChange={(value) => this.setState({ padrao: value.target.value })}
                        />
                    </FormGroup>
                    <FormGroup row>
                        <Label className="grad-txt" for="preco_premieum" size="lg">Preço Premium:</Label>
                        <Input type="number" name="premium" id="premium" bsSize="lg" value={this.state.premium}
                            onChange={(value) => this.setState({ premium: value.target.value })}
                        />
                    </FormGroup>

                    <FormGroup row>
                    <Label className="grad-txt" for="img_service" size="lg">Imagem do Serviço</Label>
                      <img src="" className="rounded-circle border border-grad" width="200px" height="200px" alt="Imagem do Serviço" />
                      <input type="file" name="imagemservico" className="form-control-file my-3 btn btn-primary btn-sm" accept="image/x-png,image/jpeg"
                        onChange={(value) => this.setState({ imagem: value.target.value })} />
                    </FormGroup>

                    <Button color="primary" size="lg" onClick={() => this.atualizaServico()}>Editar Serviço</Button>
                </Form>
                 <br></br><br></br>
            </div>
        );
    }
    atualizaServico() {
        if (this.state.id_servico !== "") {
            const url = "http://localhost:3001/api/v1/servico/" + this.state.id_servico;
            const dados = {
                id_servico: this.state.id_servico,
                id_utilizador: this.state.id_utilizador,
                id_subarea: this.state.id_subarea,
                descricao: this.state.descricao,
                base: this.state.base,
                padrao: this.state.padrao,
                premium: this.state.premium,
                id_preco_servico: this.state.id_preco_servico,


            };

            axios
                .put(url, dados)
                .then((response) => {
                    console.log(response.data);
                    if (response.status === 200 && response.data.success === true) {
                        alert("Serviço atualizado com sucesso. [ID: " + response.data.dados + "]");
                        this.props.history.push('/');
                    } else {
                        alert("Ocorreu um erro ao tentar editar os dados do serviço. Tente novamente mais tarde.");
                    }
                })
                .catch((error) => {
                    console.log("Error Msg: " + error);
                    alert("Ocorreu um erro ao tentar editar os dados do serviço. Tente novamente mais tarde.");
                    this.props.history.push('/');
                });
        }
    }
}

export default EditaServico;