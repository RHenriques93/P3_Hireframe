import React, { Component } from 'react';
import { Container, Button, Table } from 'reactstrap';
import { NavLink } from "react-router-dom";
import axios from 'axios';


class ListaServicos extends Component {
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
            <Container>
                <Table>
                    <thead>
                        <tr>
                            <th>ID do Serviço</th>
                            <th>Utilizador</th>
                            <th>Área</th>
                            <th>Subarea</th>
                            <th>Descrição</th>
                            <th>Preço Base</th>
                            <th>Preço Padrão</th>
                            <th>Preço Premium</th>
                            <th>Imagens do Serviço</th>
                            <th>Editar</th>
                            <th>Apagar</th>
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

        return this.state.listaServicos.map((data, index) => {
            return (
                <tr key={index}>
                    <td>{data.id_servico}</td>
                    <td>{data.utilizador.nome}</td>
                    <td>{/*data.subarea.area.nome*/}</td>
                    <td>{data.subarea.nome}</td>
                    <td>{data.descricao}</td>
                    <td>{data.preco_servico.base}</td>
                    <td>{data.preco_servico.padrao}</td>
                    <td>{data.preco_servico.premium}</td>
                    <td>{/*data.img_service.img_serv*/}</td>

                    <td>
                        <NavLink to={"servico/edit/" + data.id_servico}>
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



export default ListaServicos;