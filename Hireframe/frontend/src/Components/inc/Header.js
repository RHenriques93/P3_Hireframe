import React from "react";
import '../css/custom.css';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  return (


<div className="container-fluid bg-dark">
        <header className="menu-font-20 ">
            <nav className="navbar navbar-expand-lg navbar-dark" id="navbar">
                <a href="/index" className="navbar-brand">
                    <img src="/img/hire-frame.png" alt="Logotipo Hireframe" height="70" class="d-inline-block align-top"></img>
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Menu Colapso">
                    <span className="navbar-toggler-icon text-light"></span>
                </button>

                <div id="menu" className="collapse navbar-collapse">
                    <hr></hr>
                    <ul className="navbar-nav mr-auto text-light">
                        <li className="nav-item text-light f-600">
                            <a href="/sobre" className="nav-link">Sobre</a>
                        </li>
                        <hr></hr>
                        <li className="nav-item text-light f-600">
                            <a href="/areas" class="nav-link">Serviços</a>
                        </li>


                        <hr></hr>
                        <li className="nav-item text-light f-600">
                            <a href="/Contacto" class="nav-link">Contactos</a>
                        </li>
                        <hr></hr>

                  
                        <li className="nav-item text-light f-600">
                            <a href="/requisicoes" class="nav-link">Requisições</a>
                        </li>
                    
                    </ul>


                    <form className="form-inline" method="post">
                    
                        <div className="input-group">
                    
                            <input className="form-control border border-warning" name="search" type="search" placeholder="Procura" aria-label="Search" required/>
                            <span className="input-group-btn">
                                <button className="btn btn-warning" formaction=""><FaSearch /></button>
                            </span>
                          
                        </div>
                    </form>


    <a href="/login" className="btn btn btn-login m-1  f-500 f-17 text-light f-600">Login</a>
    <a href="/utilizador/registar"  className="btn btn-login text-light f-600">Registar</a>
                      
    {/*<a href="" className="btn btn-login">Logout</a>*/}
   

                    
                </div>
            </nav>
        </header>
        
    </div>


    );
}
export default Header;