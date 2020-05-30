import React, { Component } from 'react';
import { Container } from 'reactstrap';
import axios from 'axios';


class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaUtilizador: []
        }
    }

    //lifecycle do component
    componentDidMount() {
        let utilizador_Id = this.props.match.params.id;
        const url = "http://localhost:3001/api/v1/utilizador/" + utilizador_Id;

        axios
            .get(url)
            .then((res) => {
                if (res.status !== "500" && res.data.success) {
                    //const data = res.data.data;
                    const data = res.data.dados;
                    this.setState({ listaUtilizador: data });
                } else if (res.status === "500") {
                    console.log("Erro");
                }
            })
            .catch((error) => {
                console.log("Error Msg: " + error);
            });
    }

    render() {
      return this.state.listaUtilizador.map((data) => {
        return (
          



<div class="container">

  <nav aria-label="breadcrumb">
    <br />
    <ol class="breadcrumb grad">
      <li class="breadcrumb-item active text-light" aria-current="page">Perfil</li>
    </ol>
  </nav>


  <div class="container-fluid py-3 justify-content-center">

    {/*</div> <header class="col-md-12 mb-4">
          <h2 class="text-center text-dark">Bem Vindo <br><span class="f-700 text-dark">'.$row['nome'].'</span></h2>
          <span class="underline-rosa mb-3"></span>
        </header>
    
        <div class="row justify-content-center">
          <img src="" class="rounded-circle border border-grad" width="200px" height="200px">
        </div><br>
    
        <div class="row justify-content-center">
          <div class="col-md-4">
            <button class="btn btn-grad grad col-12 mb-2"><h5><a class="text-light" href="index.php?op=usersettings">Informações de Perfil</a></h5></button>
          </div>
          <div class="col-md-4">
            <button class="btn btn-grad grad col-12 mb-2"><h5><a class="text-light" href ="index.php?op=listarreq">Seus Pedidos</a></h5></button>
          </div>
          <div class="col-md-12 text-center my-2 mt-4">
          <button class="btn btn-danger"><a class="text-white" href="index.php?op=logout"><h5>Logout</a></h5></button>
          </div>
          </div>*/}


    {/* </div><header class="col-md-12 mb-4">
          <h2 class="text-center text-dark">Bem Vindo <br><span class="f-700 text-dark">'.$row['nome'].'</span></h2>
          <span class="underline-rosa mb-3"></span>
        </header>
    
         <div class="row justify-content-center">
        <img src="" class="rounded-circle border border-grad" width="200px" height="200px">
         </div><br/>
    
        <div class="row justify-content-center">
          <div class="col-md-4">
            <button class="btn btn-grad grad col-12 mb-2"><h5><a class="text-light" href="index.php?op=usersettings">Informações de Perfil</a></h5></button>
          </div>
          <div class="col-md-4">
            <button class="btn btn-grad grad col-12 mb-2"><h5><a class="text-light" href ="index.php?op=listarservicos">Seus Serviços</a></h5></button>
          </div>
         
          <div class="col-md-12 text-center my-2 mt-4">
          <button class="btn btn-danger"><a class="text-white" href="index.php?op=logout"><h5>Logout</a></h5></button>
          </div>
        </div> */}




    <header className="col-md-12 mb-4">
      <h2 className="text-center text-dark">Bem Vindo <br/><span className="f-700 text-dark">{data.nome}</span></h2>
        <span className="underline-rosa mb-3"></span>
        </header>

      <div className="row justify-content-center">
        <img src={data.imagem} className="rounded-circle border border-grad" width="200px" height="200px" alt="Imagem de Perfil do Utilizador"/>
         </div><br/>

          <div className="row justify-content-center">
            <div className="col-md-4">
              <button className="btn btn-grad grad col-12 mb-2"><h5><a className="text-light" href={"/utilizador/user_settings/" + data.id_utilizador}>Informações de Perfil</a></h5></button>
            </div>

            <div className="col-md-4">
              <button className="btn btn-grad grad col-12 mb-2"><h5><a className="text-light" href={"/utilizador/requisicoes_utilizador/" + data.id_utilizador}>Seus Pedidos</a></h5></button>
            </div>

            <div className="col-md-4">
              <button className="btn btn-grad grad col-12 mb-2"><h5><a className="text-light" href={"/utilizador/servicos_utilizador/" + data.id_utilizador}>Seus Serviços</a></h5></button>
            </div>


            <div className="col-md-12 text-center my-2 mt-4">
              <button className="btn btn-danger"><a class="text-white" href="index.php?op=logout">Logout</a></button>
            </div>
          </div>
        


                 
  </div>
      </div>



      );
        });
    };
}


export default UserPage;
