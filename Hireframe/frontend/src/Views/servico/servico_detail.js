import React, { Component } from 'react';
import { Container } from 'reactstrap';
import axios from 'axios';


class Servico_Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaServico: []
        }
    }

    //lifecycle do component
    componentDidMount() {
        let servico_detail_Id = this.props.match.params.id;
        const url = "http://localhost:3001/api/v1/servico/" + servico_detail_Id;

        axios
            .get(url)
            .then((res) => {
                if (res.status !== "500" && res.data.success) {
                    //const data = res.data.data;
                    const data = res.data.dados;
                    this.setState({ listaServico: data });
                } else if (res.status === "500") {
                    console.log("Erro");
                }
            })
            .catch((error) => {
                console.log("Error Msg: " + error);
            });
    }

    render() {
        return this.state.listaServico.map((data) => {
            return (
                <Container>

                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="card m-4">
                                    <div className="card-body grad rounded">

                                        <div className="media">
                                            <img src={data.utilizador.imagem} className="align-self-center mr-3 rounded-circle border border-grad" width="150px" height="150px" alt="Avatar" />
                                            <div className="media-body">
                                                <h5 className="mt-0">Prestador de Serviço</h5><hr />
                                                <p className="text-black"><span class="font-weight-bold">Nome: </span>{data.utilizador.nome}</p><hr />
                                                <p><span className="font-weight-bold">Biografia: </span>{data.utilizador.biografia}</p><hr />
                                                <p><span className="font-weight-bold">Género: </span>{data.utilizador.genero}</p>
                                            </div>
                                        </div>

                                        <hr />


                                        <div className="col-md-12">
                                            <label className="grad-white f-20 font-weight-bold">Serviço</label>
                                            <ul class="list-group">
                                                <li className="list-group-item text-dark"><span className="font-weight-bold grad-txt">Área: </span></li>
                                                <li className="list-group-item text-dark"><span className="font-weight-bold grad-txt">Subarea: </span>{data.subarea.nome}</li>
                                                <li className="list-group-item text-dark"><span className="font-weight-bold grad-txt">Descrição: </span>{data.descricao}</li>
                                                <li className="list-group-item text-dark">
                                                    <ul className="m-2">
                                                        <li className="text-dark"><span className="font-weight-bold grad-txt">Preço Base: </span>{data.base}</li>
                                                        <li className="text-dark"><span className="font-weight-bold grad-txt">Preço Padrão: </span>{data.padrao}</li>
                                                        <li className="text-dark"><span className="font-weight-bold grad-txt">Preço Premium: </span>{data.premium}</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            <br />
                                        </div>

                                        <div className="container">
                                            <div className="row justify-content-center">

                                                <div class="col-md-5 col-sm-4 col-xs-6 m-2 text-center">
                                                    <figure class="figure">
                                                        <img class="figure-img img-fluid" src={data.img_service.img_serv} width="auto" height="250px" alt="Imagem do Serviço" />
                                                    </figure>
                                                </div>

                                            </div>
                                        </div>


                                        <div className="form-row justify-content-center">
                                            <button type="button" className="btn btn-success btn-lg btn-block" data-toggle="modal" data-target="#exampleModalCenter">Contratar Serviço</button>
                                        </div>


                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </Container >
            );

        });

    };
}


export default Servico_Detail;