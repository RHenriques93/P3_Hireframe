import React from "react";
import '../css/custom.css';

import Sugestoes from './Sugestoes.js';
import AreasMain from "./AreasMain";

const Main = () => {
    return (

        <div>

            <div class="container-fluid grad pad-30">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-8 text-center">
                            <h1 class="text-uppercase"><img width="250px" src="img/hire-frame_yellow.png" alt="Logotipo Hireframe - Versão Amarelo"/></h1>
                            <p class="lead">Aqui poderás encontrar diversos tipos de serviços realizados por trabalhadores freelancers nas diversas áreas abrangidas.</p>
                        </div>

                        <form method="POST" class="col-5">
                            <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <button id="button-addon2" formaction="index.php?op=procura" type="submit" class="btn btn-link"><i class="fas fa-search color-yw"></i></button>
                                    </div>
                                    <input type="search" name="search" placeholder='O que procuras? "logo" "web site" "captura de video"' aria-describedby="button-addon2" class="form-control border-0 bg-light" required />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


           <AreasMain/>



            <div class="container-fluid bg-dark">
                <div class="py-4">
                    <section class="container">
                        <header class="col-md-12 mb-4">
                            <h2 class="text-center text-light">Os nossos números</h2>
                            <span class="underline-rosa"></span>
                            <p class="my-2 text-center text-light">Estes são alguns dos números que temos vindo a angariar</p>
                        </header>
                        <div class="row py-2">
                            <div class="col-sm-3 col-md-3 col-lg-3 col-xs-6 mb-4">
                                <div class="fatos">
                                    <div class="icon">
                                        <i class="fas fa-briefcase"></i>
                                    </div>
                                    <div class="contador">
                                        <h3><span class="contar">8</span></h3>

                                        <h4>Freelancers</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3 col-md-3 col-lg-3 col-xs-6 mb-4">
                                <div class="fatos">
                                    <div class="icon">
                                        <i class="fas fa-shopping-cart"></i>
                                    </div>
                                    <div class="contador">
                                        <h3>+<span class="contar">7</span></h3>
                                        <h4>Vendas</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3 col-md-3 col-lg-3 mb-4">
                                <div class="fatos">
                                    <div class="icon">
                                        <i class="fa fa-users"></i>
                                    </div>
                                    <div class="contador">
                                        <h3>+<span class="contar">4</span></h3>
                                        <h4>Clientes</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3 col-md-3 col-lg-3 mb-4">
                                <div class="fatos">
                                    <div class="icon">
                                        <i class="fa fa-star"></i>
                                    </div>
                                    <div class="contador">
                                        <h3><span class="contar">4.8</span></h3>
                                        <h4>Avaliação</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>


           <Sugestoes/>

        </div>



    );
}
export default Main;