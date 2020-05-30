import React, { Component } from 'react';
import '../css/custom.css';
import axios from 'axios';



class AreasMain extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listaAreas: []
        }
    }

    //lifecycle do component
    componentDidMount() {
        const url = "http://localhost:3001/api/v1/areas_main";

        axios
            .get(url)
            .then((res) => {
                if (res.status !== "500" && res.data.success) {
                    //const data = res.data.data;
                    const data = res.data.dados;
                    this.setState({ listaAreas: data });


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

            <div class="container-fluid">
                <div class="mt-2 py-4">
                    <section class="container">
                        <header class="col-md-12">
                            <h2 class="text-center text-dark">Serviços</h2>
                            <span class="underline"></span>
                        </header>
                        <div class="row pt-4 justify-content-center">

                            {this.preencheDados()}

                            <br /><hr class="mx-5" />
                            <div class="col-md-12 justify-content-center text-center">
                                <button class="btn btn-grad grad text-center mt-2"><a href="/areas" class="text-light">Ver Todos<i class="far fa-plus-square ml-2"></i></a></button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        );
    }


    preencheDados() {

        return this.state.listaAreas.map((data, index) => {
            return (


                <div class="col-md-6 col-lg-6 col-sm-6 col-xs-12 my-1 text-center">
                    <div class="grad p-4 rounded">
                        <a href={"/subarea_area/" + data.id_area} class="text-light">
                            <h3 class="px-2"><div class="panel-body">
                                <img src={data.img_area} width="100px" class="img-fluid" /><hr />
                            </div>{data.nome}</h3>
                        </a>
                    </div>
                </div>


            );
        });
    };
}


export default AreasMain;