import React from "react";
import '../css/custom.css';

const Sobre = () => {
    return (

        <div className="container">
            <div className="row justify-content-center">
                <div class="col-md-6">

                    <br></br>
                    <header className="col-md-12 mb-4">
                        <h2 className="text-center text-dark">Sobre a Hire-frame<br></br><span className="f-700 text-dark"></span></h2>
                            <span className="underline mb-3"></span>
                    </header>

                </div>
            </div>

                <section id="about">

                    <div className="row">

                        <div className="col-lg-9 mx-auto">

                            <br></br>
                            <ul className="list-group">
                                <li className="list-group-item grad text-center" ><p className="lead">Este website surgiu através do desenvolvimento de um projeto prático realizado no âmbito da unidade curricular de <span className="font-weight-bold">Programação II</span>, que está inserida no plano de estudos da <span className="font-weight-bold">Licenciatura em Multimédia</span> no <span className="font-weight-bold">Instituto Superior Miguel Torga em Coimbra</span>, pelos alunos <span class="font-weight-bold">André Ferreira e Rafael Henriques.</span></p></li>
                                <li className="list-group-item grad text-center"><p className="lead">O projeto tem como fundamento a conceção de uma <span className="font-weight-bold">aplicação web</span> que permita a gestão de um sistema de forma intuitiva recorrendo à linguagem back-end <span className="font-weight-bold">PHP</span>, com a comunicação com a base de dados <span className="font-weight-bold">MySQL</span> feita através da extensão <span className="font-weight-bold">PDO</span>. </p></li>
                                <li className="list-group-item grad text-center"><p className="lead">Consiste no desenvolvimento de uma aplicação web que permita tanto a trabalhadores freelancer como por exemplo designers, fotógrafos, videógrafos ou programadores se possam registar e apresentar as suas ofertas de serviços, mas também a utilizadores que pretendam que lhes sejam apresentadas propostas para a realização de um determinado serviço, coloquem assim um anúncio para serem contactadas.</p></li>

                            </ul>

                            <br></br>


                        </div>

                    </div>

                </section>

            </div>

  );
}
export default Sobre;