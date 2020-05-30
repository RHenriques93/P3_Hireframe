import React from "react";
import '../css/custom.css';

const Contacto = () => {
    return (

        <div className="container py-3">
            <section className="mb-4">
                <header className="col-md-12 mb-4">
                    <h2 className="text-center text-dark">Contactos</h2>
                    <span className="underline mb-3"></span>
                    <p className="text-center w-responsive mx-auto mb-5 btn-grad grad p-2">Alguma questão? Entre em contacto connosco para qualquer dúvida ou sugestão que tenha
            para nos ajudar a melhorar.</p>
                </header>
                <div className="row">
                    <div className="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" className="contact-form" action="mail.php" method="POST">
                            <div className="row mt-2">
                                <div className="col-md-6 mt-2">
                                    <div className="md-form mb-0">
                                        <label className="grad-txt f-20 font-weight-bold" for="name">Nome</label>
                                        <input type="text" class="form-control" id="name" aria-describedby="nameHelp" />
                                    </div>
                                </div>
                                <div className="col-md-6 mt-2">
                                    <div className="md-form mb-0">
                                        <label className="grad-txt f-20 font-weight-bold" for="email">Email</label>
                                        <input type="email" id="email" name="email" className="form-control" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-12 mt-2">
                                    <div className="md-form mb-0">
                                        <label className="grad-txt f-20 font-weight-bold" for="subject">Assunto</label>
                                        <input type="text" id="subject" name="subject" className="form-control" aria-describedby="subjectlHelp" />
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-12 mt-2">
                                    <div className="md-form">
                                        <label className="grad-txt f-20 font-weight-bold" for="message">Mensagem</label>
                                        <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="text-center text-md-left mt-3">
                            <button className="btn btn-grad grad"><p className="text-light">Submeter</p></button>
                        </div>
                        <div className="status"></div>
                    </div>
                    <div className="col-md-3 text-center">
                        <ul className="list-unstyled mb-0">
                            <li className="grad rounded p-2 m-2"><i className="fas fa-map-marker-alt mt-2 fa-2x"></i>
                                <p className="mt-3">Rua Teste, 3045-000, Coimbra</p>
                            </li>
                            <li className="grad rounded p-2 m-2"><i className="fas fa-envelope mt-2 fa-2x"></i>
                                <p className="mt-2">teste@teste.com</p>
                            </li>
                            <li className="grad rounded p-2 m-2"><i className="fas fa-phone mt-2 fa-2x"></i>
                                <p className="mt-2">910 000 000</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>


    );
}
export default Contacto;