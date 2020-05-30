import React from "react";
import '../css/custom.css';

const FooterPage = () => {
  return (

  
<div className="footer page-footer font-small pt-4">
    <div className="grad pad-top-20">

        <div class="container-fluid text-center text-md-left">
            <div className="row">

                <div className="col-md-6 mt-md-0 mt-3">
                    <h5>Informações Adicionais</h5><hr></hr>
                    <p>Este website foi desenvolvido no âmbito da unidade curricular de Programação II que integra o plano de estudos da Licenciatura de Multimédia 
                    do Instituto Superior Miguel Torga.</p>
                </div>

                <hr className="clearfix w-100 d-md-none"></hr>

                <div className="col-md-4">
                    <h5>Contactos</h5><hr></hr>
                    <dl class="contact-list">
                        <dt>Morada:</dt>
                          <dd>Rua Teste, 3045-000, Coimbra</dd>
                    </dl><hr></hr>
                    <dl class="contact-list">
                        <dt>Email:</dt>
                          <dd><a class="text-white" href="mailto:">teste@gmail.com</a></dd>
                    </dl><hr></hr>

                  <dl className="contact-list">
                      <dt>Telefone:</dt>
                      <dd><a class="text-white" href="tel: +351">+351 910 000 000 </a></dd>
                  </dl>
                </div>


            </div>
        </div>

            <div className="page-footer font-small bg-dark mt-4">
                  <div className="footer-copyright text-center py-3">© 2020 Copyright |
                        <a href="https://www.falcondesign.pt/"> André Ferreira</a> e <a href="https://www.behance.net/rafael_hen06b4?tracking_source=search-all%7Crafael%20henriques">Rafael Henriques</a>   
                  </div>
            </div>
    </div>
</div>



  );
}
export default FooterPage;