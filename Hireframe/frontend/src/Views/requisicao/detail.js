import React, { Component } from 'react';
import { Container } from 'reactstrap';
import axios from 'axios';


class Requisicao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaRequisicoes: []
        }
    }

    //lifecycle do component
    componentDidMount() {
        let requisicaoId = this.props.match.params.id;
        const url = "http://localhost:3001/api/v1/requisicao/" + requisicaoId;

        axios
            .get(url)
            .then((res) => {
                if (res.status !== "500" && res.data.success) {
                    //const data = res.data.data;
                    const data = res.data.dados;
                    this.setState({ listaRequisicoes: data });
                } else if (res.status === "500") {
                    console.log("Erro");
                }
            })
            .catch((error) => {
                console.log("Error Msg: " + error);
            });
    }

    render() {
        return this.state.listaRequisicoes.map((data) => {
            return (
            <Container>
                <div class="container-fluid">
                    <div class="row justify-content-center">
                        <div class="col-md-8 mt-4">
                            <div class="card-body grad rounded">
                                <div class="media">
                                    <img src={data.utilizador.imagem} class="align-self-center mr-3 rounded-circle border border-grad" width="150px" height="150px" alt="..." />

                                    <div class="media-body">
                                        <h5 class="mt-0 f-20 font-weight-bold">Requisitador de Serviço</h5><hr />
                                        <p><strong>Nome: </strong>{data.utilizador.nome}</p><hr />
                                        <p><strong>Biografia: </strong>{data.utilizador.biografia}</p><hr />
                                        <p><strong>Género: </strong>{data.utilizador.genero}</p>
                                    </div>
                                </div>

                                <hr />

                                <div class="media">
                                    <img src={data.img_req} class="align-self-center mr-3" width="150px" height="150px" alt="..." />
                                    <div class="media-body">
                                        <label class="grad-white f-20 font-weight-bold">Serviço Requisitado</label>
                                        <ul class="list-group">
                                            <li class="list-group-item text-dark"><span class="grad-txt font-weight-bold">Área: </span>{data.subarea.area.nome}</li>
                                            <li class="list-group-item text-dark"><span class="grad-txt font-weight-bold">Subarea: </span>{data.subarea.nome}</li>
                                            <li class="list-group-item text-dark"><span class="grad-txt font-weight-bold">Descrição: </span>{data.descricao}</li>
                                            <li class="list-group-item text-dark"><span class="grad-txt font-weight-bold">Orçamento que estou disposto a gastar: </span>{data.preco} €</li>
                                        </ul>
                                        <br />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container >
            )
            
            }
        );
    }
}




export default Requisicao;