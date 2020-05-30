import React, { Component } from 'react';
import axios from "axios";


class UserSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_utilizador: "",
      nome: "",
      username: "",
      email: "",
      data_nascimento: "",
      pass: "",
      id_tipo: "",
      biografia: "",
      imagem: "",
      genero: "",
    };
  }

  componentDidMount() {
    let utilizadorId = this.props.match.params.id;
    const url = "http://localhost:3001/api/v1/utilizador/" + utilizadorId;

    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          //dados recebidos
          //console.log(JSON.stringify(res.data.dados[0]));

          const dados = res.data.dados[0];
          this.setState({
            id_utilizador: dados.id_utilizador,
            nome: dados.nome,
            username: dados.username,
            email: dados.email,
            data_nascimento: dados.data_nascimento,
            pass: dados.pass,
            id_tipo: dados.id_tipo,
            nome_tipo: dados.tipo_utilizador.nome_tipo,
            biografia: dados.biografia,
            imagem: dados.imagem,
            genero: dados.genero,
          });
        } else {
          console.log("Erro");
        }
      })
      .catch((error) => {
        console.log("Error Msg: " + error);
      });
  }

  render() {
    return (


      <div className="container">
        <div className="container-fluid py-3 justify-content-center">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb grad">
              <li className="breadcrumb-item"><a class="text-white font-weight-bold" href={"/utilizador/user_page/" + this.state.id_utilizador}>Perfil</a></li>
              <li className="breadcrumb-item active text-light" aria-current="page">Informações de Perfil</li>
            </ol>
          </nav>

          <header className="col-md-12 mb-4">
            <h2 className="text-center text-dark">Informações de Perfil</h2>
            <span className="underline mb-3"></span>
          </header>


          <div className="container">

            <form>

              <div className="row justify-content-center">

                <div className="col-md-8">
                  <div className="row justify-content-center">

                    <div className="col-md-4 text-center p-3 justify-content-center">
                      <img src={this.state.imagem} className="rounded-circle border border-grad" width="200px" height="200px" alt="Foto de Perfil" />
                      <input type="file" name="imagemperfil" className="form-control-file my-3 btn btn-primary btn-sm" accept="image/x-png,image/jpeg"
                        onChange={(value) => this.setState({ imagem: value.target.value })} />
                    </div>

                    <div className="col-md-12 mb-3"> <hr />
                      <label className="grad-txt f-20 font-weight-bold" for="name">Nome</label>
                      <input type="text" class="form-control" id="name" name="nome" aria-describedby="nameHelp" value={this.state.nome}
                        onChange={(value) => this.setState({ nome: value.target.value })} />
                    </div>

                    <div className="col-md-4 mb-3">
                      <label className="grad-txt f-20 font-weight-bold" for="nascimento">Data de Nascimento</label>
                      <input type="date" className="form-control" id="nascimento" name="nascimento" aria-describedby="nascimentoHelp" value={this.state.data_nascimento}
                        onChange={(value) => this.setState({ data_nascimento: value.target.value })} />
                    </div>

                    <div className="col-md-4 mb-3">
                      <label className="grad-txt f-20 font-weight-bold" for="tipo_utilizador">Tipo de Utilizador</label>
                      <select className="custom-select mt-2 text-secondary w-100 align-content-left" id="inputGroupSelect01" name="tipo_utilizador" required onChange={(value) => this.setState({ id_tipo: value.target.value })}>
                        <option className="bg-dark text-dark" value={this.state.nome_tipo}>{this.state.nome_tipo}</option>
                        <option className="text-secondary" value="1">Cliente</option>
                        <option className="text-secondary" value="2">Trabalhador</option>
                        <option className="text-secondary" value="3">Cliente e Trabalhador</option>
                      </select>
                    </div>

                    <div className="col-md-4 mb-3">
                      <label className="grad-txt f-20 font-weight-bold" for="genero">Genero</label>
                      <select className="custom-select mt-2 text-secondary w-100 align-content-left" name="genero" required onChange={(value) => this.setState({ genero: value.target.value })}>
                        <option className="bg-dark text-dark" value={this.state.genero}>{this.state.genero}</option>
                        <option className="text-secondary" value="Masculino">Masculino</option>
                        <option className="text-secondary" value="Feminino">Feminino</option>
                      </select>
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="grad-txt f-20 font-weight-bold" for="user">Username</label>
                      <input type="text" class="form-control" id="user" aria-describedby="userHelp" value={this.state.username}
                        onChange={(value) => this.setState({ username: value.target.value })} />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="grad-txt f-20 font-weight-bold" for="pass">Password</label><br />
                      <input type="password" class="form-control" id="password" aria-describedby="userHelp" value={this.state.pass}
                        onChange={(value) => this.setState({ pass: value.target.value })} />

                    </div>

                    <div className="col-md-12 mb-1">
                      <label className="grad-txt f-20 font-weight-bold" for="biografia">Biografia</label>
                      <textarea type="text" className="form-control" id="biografia" maxlength="255" name="biografia" aria-describedby="biografiaHelp" value={this.state.biografia}
                        onChange={(value) => this.setState({ biografia: value.target.value })}></textarea>
                      <p className="figure-caption">Máx. 255 caracteres</p>
                    </div>

                    <div className="col-md-12 mb-3">
                      <label class="grad-txt f-20 font-weight-bold" for="email">Email</label>
                      <input type="text" className="form-control" id="email" name="email" aria-describedby="emailHelp" value={this.state.email}
                        onChange={(value) => this.setState({ email: value.target.value })} />
                    </div>

                    <div class="col-md-12">
                      <button type="submit" className="submitimg" class="btn btn-primary ml-auto" onClick={() => this.atualizaUtilizador()}>Atualizar Perfil</button>
                    </div>

                  </div>
                </div>
              </div>



            </form>
          </div>
        </div>
      </div>

    );
  }

  atualizaUtilizador() {
    if (this.state.id_utilizador !== "" && this.state.nome !== "") {
      const url = "http://localhost:3001/api/v1/utilizador/" + this.state.id_utilizador;
      const dados = {
        id_utilizador: this.state.id_utilizador,
        nome: this.state.nome,
        username: this.state.username,
        email: this.state.email,
        data_nascimento: this.state.data_nascimento,
        pass: this.state.pass,
        id_tipo: this.state.id_tipo,
        biografia: this.state.biografia,
        imagem: this.state.imagem,
        genero: this.state.genero,
      };

      axios
        .put(url, dados)
        .then((response) => {
          console.log(response.data);
          if (response.status === 200 && response.data.success === true) {
            alert("Utilizador atualizado com sucesso. [ID: " + response.data.dados + "]");
            this.props.history.push('/');
          } else {
            alert("Ocorreu um erro ao tentar editar os dados do utilizador. Tente novamente mais tarde.");
          }
        })
        .catch((error) => {
          console.log("Error Msg: " + error);
          alert("Ocorreu um erro ao tentar editar os dados do utilizador. Tente novamente mais tarde.");
          this.props.history.push('/');
        });
    }
  }
}

export default UserSettings;
