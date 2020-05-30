import React, { Component } from 'react';
import { Container, Button, Table } from 'reactstrap';
import { NavLink } from "react-router-dom";
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
        return (
            <Container>
                <Table>
                    <thead>
                        <tr>
                            <th>Nome do Requisitador</th>
                            <th>Área</th>
                            <th>Subarea</th>
                            <th>Descrição</th>
                            <th>Orçamento que Está Diposto a Pagar</th>
                            <th>Imagem da Requisição</th>
                          
                        </tr>
                    </thead>
                    <tbody>
                        {this.preencheDados()}
                    </tbody>

                </Table >
            </Container >
        );
    }


    preencheDados() {

        return this.state.listaRequisicoes.map((data, index) => {
            return (
                <tr key={index}>
                    <td>{data.utilizador.nome}</td>
                    <td>{/*data.subarea.area.nome*/}</td>
                    <td>{data.subarea.nome}</td>
                    <td>{data.descricao}</td>
                    <td>{data.preco}</td>
                    <td>{data.img_req}</td>
              
                    <td>
                        <NavLink to={"requisicao/edit/" + data.id_requisicao}>
                            <Button color="info">Editar</Button>
                        </NavLink>
                    </td>
                    <td>
                        <Button color="danger">Apagar</Button>
                    </td>

                </tr>
            );
        });
    };
}



export default Requisicao;