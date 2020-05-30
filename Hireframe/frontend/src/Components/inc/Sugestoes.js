import React, { Component } from 'react';
import '../css/custom.css';
import axios from 'axios';



class Sugestoes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listaServicos: []
        }
    }

    //lifecycle do component
    componentDidMount() {
        const url = "http://localhost:3001/api/v1/servicos";

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

            <div>
                <div class="container-fluid">
                    <div class="my-2 py-4">
                        <section class="container">
                            <header class="col-md-12 mb-4">
                                <h2 class="text-center text-dark">Sugestões</h2>
                                <span class="underline"></span>
                            </header>
                            <div class="row py-4">

                            {this.preencheDados()}



                            </div>
                        </section>
                    </div>
                </div>

            </div>

        );
    }


    preencheDados() {

        return this.state.listaServicos.map((data, index) => {
            return (

                <div class="col-sm-6 col-md-3 col-xs-12 mb-2">
                <div class="tabela-preco sombra">
                    <div class="preco-detalhe">
                        <h2>{data.subarea.nome}</h2>
                        <h4 class="text-success">{data.subarea.nome}</h4><hr />
                        <p class="grad-txt font-weight-bold">{data.utilizador.nome}</p><hr />


                <div id="" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <p class="text-danger">Base</p>
                            <span>{data.preco_servico.base} €</span>
                        </div>

                        <div class="carousel-item">
                            <p class="text-danger">Padrão</p>
                            <span>{data.preco_servico.padrao} €</span>
                        </div>

                        <div class="carousel-item">
                            <p class="text-danger">Premium</p>
                            <span>{data.preco_servico.premium} €</span>
                        </div>
                    </div>

                    <a class="carousel-control-prev rounded-right pt-3" href="#" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next rounded-left pt-3" href="#" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>

                </div>

                <hr />

                <div class="preco-btn mb-2">
                    <a href={"/servico_detail/" + data.id_servico } class="btn btn-preco">+ Informação</a>
                </div>
                
                </div>
                                    </div>
                                </div>

);
        });
    };
}


export default Sugestoes;