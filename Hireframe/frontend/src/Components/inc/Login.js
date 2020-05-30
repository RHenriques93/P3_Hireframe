import React, { Component } from 'react';
import axios from "axios";
import '../css/custom.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            pass: ""
        }

    }

    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
          [name]: value
        });
      }
      onSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3001/api/v1/login', {
          method: 'POST',
          body: JSON.stringify(this.state),
          headers: {
            'Content-Type': 'application/json'
            
          }
        })
        .then(res => {
          if (res.status === 200) {
            alert('Login Efetuado com Sucesso');
            this.props.history.push('/utilizador/user_page/' + 8 );
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch(err => {
          console.error(err);
          alert('Username ou Password inválidos, tente novamente.');
        });
      }

        render() {
            return (

                <div>
                    <div className="container">

                        <div className="row justify-content-center">
                            <div className="col-md-7">
                                <div className="row area justify-content-center">

                                    <div className="col-md-12  text-center p-2">
                                        <h1 className="grad-txt">Área de Utilizador</h1>
                                    </div>
                                    <div className="col-12 text-center d-flex justify-content-center">
                                        <hr className="divider" />
                                    </div>
                                    <form className="col-6 text-center justify-content-center" onSubmit={this.onSubmit}>
                                        <div className="input-group m-2">
                                            <span className="input-group-addon" id="input1"><i className="fas fa-user fa-sm txt-gr op-3"></i></span>
                                            <input type="text" className="form-control text-center" name="username" placeholder="Username" value={this.state.username}
                                               onChange={this.handleInputChange} required  />
                                        </div>
                                        <div className="input-group m-2">
                                            <span className="input-group-addon" id="input1"><i className="fas fa-key fa-sm txt-gr op-3"></i></span>
                                            <input type="password" className="form-control text-center" name="pass" placeholder="Password" value={this.state.pass}
                                                onChange={this.handleInputChange} required />
                                        </div>
                                        <button type="submit" name="submit"value="Submit" className="btn btn-grad grad text-center m-2"><i className="fas fa-sign-in-alt"></i> Login</button>
                                    </form>
                                    <div class="col-12 text-center p-2">
                                        <button type="submit" className="btn grad-txt text-center m-2" data-toggle="modal" data-target="#demoModal">Recuperar Password</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            );
        }
    }


    export default Login;

