import React, { Component } from 'react';
import { Container, Button, Table } from 'reactstrap';
import { NavLink } from "react-router-dom";
import axios from 'axios';


class ListaUtilizadores extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaUtilizadores: []
        }
    }

    //lifecycle do component
    componentDidMount() {
        const url = "http://localhost:3001/api/v1/utilizadores";

        axios
            .get(url)
            .then((res) => {
                if (res.status !== "500" && res.data.success) {
                    //const data = res.data.data;
                    const data = res.data.dados;
                    this.setState({ listaUtilizadores: data });
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
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Username</th>
                            <th>Género</th>
                            <th>Biografia</th>
                            <th>Email</th>
                            <th>Data de Nascimento</th>
                            <th>Tipo de Utilizador</th>
                            <th>imagem</th>
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

        return this.state.listaUtilizadores.map((data, index) => {
            return (
                <tr key={index}>
                    <td>{data.id_utilizador}</td>
                    <td>{data.nome}</td>
                    <td>{data.username}</td>
                    <td>{data.genero}</td>
                    <td>{data.biografia}</td>
                    <td>{data.email}</td>
                    <td>{data.data_nascimento}</td>
                    <td>{data.tipo_utilizador.nome_tipo}</td>
                    <td>{data.imagem}</td>

                    <td>
                        <NavLink to={"utilizador/edit/" + data.id_utilizador}>
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



export default ListaUtilizadores;