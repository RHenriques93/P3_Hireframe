import React, { Component } from 'react';
import { Container } from 'reactstrap';
import axios from 'axios';


class Subarea_area extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaSubareas: []
        }
    }

    //lifecycle do component
    componentDidMount() {
        let subarea_area_Id = this.props.match.params.id;
        const url = "http://localhost:3001/api/v1/subarea_area/" + subarea_area_Id;

        axios
            .get(url)
            .then((res) => {
                if (res.status !== "500" && res.data.success) {
                    //const data = res.data.data;
                    const data = res.data.dados;
                    this.setState({ listaSubareas: data });
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

        return this.state.listaSubareas.map((data) => {
            return (
                <div className="container-fluid py-3">
                <header className="col-md-12 mb-4">
                    <h2 className="text-center text-dark">Área: {data.area.nome}</h2>
                    <span className="underline mb-3"></span>
                </header>

                <div className="row justify-content-center">';
                    <div className="col-md-4 col-sm-6 col-xs-12 my-2 text-center">
                        <div className="grad p-4 rounded">
                            <a href={"/servico/servicos_subarea/" + data.id_subarea } class="text-light">
                                <h3 className="px-2"><div class="panel-body">
                                    <img src={data.img_subarea} width="100px" class="img-fluid" alt="Imagem Subarea"/>
                                    <hr />
                                </div>{data.nome}</h3>


                            </a>
                        </div>
                    </div>
                </div>
                </div>

            );
        });
    };
}


export default Subarea_area;