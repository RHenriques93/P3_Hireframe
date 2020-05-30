import React, { Component } from 'react';
import { Container} from 'reactstrap';
import axios from 'axios';


class ListaAreas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ListaAreas: []
        }
    }

    //lifecycle do component
    componentDidMount() {
        const url = "http://localhost:3001/api/v1/areas";

        axios
            .get(url)
            .then((res) => {
                if (res.status !== "500" && res.data.success) {
                    //const data = res.data.data;
                    const data = res.data.dados;
                    this.setState({ ListaAreas: data });
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
                        <h2 className="text-center text-dark">Serviços</h2>
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

        return this.state.ListaAreas.map((data) => {
            return (

                <div className="col-md-4 col-sm-6 col-xs-12 my-2 text-center">
                <div className="grad p-4 rounded">
                    <a href={"/subarea_area/" + data.id_area} class="text-light">
                        <h3 class="px-2">
                            <div class="panel-body">
                                <img src={data.img_area} alt="Imagem da Área" width="100px" class="img-fluid"></img>
                                <hr />
                            </div>{data.nome}</h3>
                    </a>
                </div>
            </div>


            );
        });
    };
}



export default ListaAreas;