import React, { Component } from 'react';
import { Container } from 'reactstrap';
import axios from 'axios';


class Servicos_Subarea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaServicos: []
        }
    }

    //lifecycle do component
    componentDidMount() {
        let servicos_subarea_Id = this.props.match.params.id;
        const url = "http://localhost:3001/api/v1/subarea_servico/" + servicos_subarea_Id;

        axios
            .get(url)
            .then((res) => {
                if (res.status !== "500" && res.data.success) {
                    //const data = res.data.data;
                    const data = res.data.dados;
                    this.setState({ listaServicos: data });
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




                {this.preencheDados()}



            </Container >
        );

    }

    preencheDados() {

        return this.state.listaServicos.map((data) => {
            return (

                <div className="container-fluid py-3">
                    <header class="col-md-12 mb-4">
                        <h2 className="text-center text-dark">{data.subarea.nome}</h2>
                        <span className="underline mb-3"></span>
                    </header>

                    <div className="row justify-content-center">
                        <div className="col-md-4 col-sm-6 col-xs-12 my-2">

                            <div className="card">
                                <div id="" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={data.utilizador.imagem} className="card-img-top" alt="..." />
                                        </div>

                                        <div className="carousel-item">
                                            <img src={data.img_serv} className="card-img-top" alt="..." />
                                        </div>

                                    </div>
                                   
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title grad-txt">{data.utilizador.nome}</h4><hr />
                                    <p className="text-dark card-subtitle">{data.descricao}</p><hr />
                                    <h5 className="text-dark card-subtitle grad-txt">Preço Base: {data.base}</h5><hr />
                                    <a href={"/servico_detail/" + data.id_servico} class="btn btn-primary mt-2">+ Info</a>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>





            );
        });
    };
}


export default Servicos_Subarea;