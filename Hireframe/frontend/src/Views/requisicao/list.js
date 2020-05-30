import React, { Component } from 'react';
import { Container, Button} from 'reactstrap';
import { NavLink } from "react-router-dom";
import axios from 'axios';


class ListaRequisicoes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaRequisicoes: []
        }
    }

    //lifecycle do component
    componentDidMount() {
        const url = "http://localhost:3001/api/v1/requisicoes";

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
        return (
            <Container>
                <div className="container-fluid py-3">
                    <header className="col-md-12 mb-4">
                        <h2 className="text-center text-dark">Requisições</h2>
                        <span className="underline-rosa mb-3"></span>
                    </header>
                            <div className="row justify-content-center">
                          
                                    {this.preencheDados()}
                             
                            </div>

                </div>
 

            </Container >
        );
    }


    preencheDados() {

        return this.state.listaRequisicoes.map((data) => {
            return (
                <div className="col-md-4 col-sm-6 col-xs-12 mb-4">
                <div className="card" >
                        <img src={data.img_req} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <p className="text-dark card-subtitle"><span className="font-weight-bold grad-txt">Nome do Projeto:</span>{data.nome_projeto}</p><hr/>
                                <p className="text-dark card-subtitle"><span className="font-weight-bold grad-txt">Descrição: </span>{data.descricao}</p><hr/>
                                <p className="text-dark card-subtitle"><span className="font-weight-bold grad-txt">Requisitador: </span>{data.utilizador.nome}</p><hr/>
                                <p className="text-dark card-subtitle"><span className="font-weight-bold grad-txt">Orçamento que Pretende Gastar: </span>{data.preco}</p>
                                <hr/>
                                <NavLink to={"requisicao/detail/" + data.id_requisicao}>
                                        <Button color="info">+ Info</Button>
                                    </NavLink>
                            </div>
                </div>
                </div>



            );
        });
    };
}



export default ListaRequisicoes;