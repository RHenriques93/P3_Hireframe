// Controller + MVC -> Editar Código do ficheiro utililzador.controller.js
const utilizador= require('../models/utilizador.model');

const sequelize = require('../config/database');

const jwt = require('jsonwebtoken');

const controller = {}



//utilizador_list
controller.utilizador_list = async (req, res) => {
    const dados = await utilizador.findAll({include: ["tipo_utilizador"]})
        .then(function (dados) {
            return dados;
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Ocorreu um erro ao carregar os dados dos Utilizadores.",
        });
    });
    console.log(dados);
    res.json({
      success: true,
      dados: dados,
    });
  };

//utilizador_detail
controller.utilizador_detail = async (req, res) => {
    const {id} = req.params;
    const dados = await utilizador.findAll({ where: { id_utilizador: id}, include: ["tipo_utilizador"] })
        .then(function (dados) {
            return dados;
        })
        .catch((error) => {
            res.status(500).send({
              message: error.message || "Ocorreu um erro ao carregar os dados do utilizador.",
            });
        });
            res.json({
                success: true,
                dados: dados,
              });
            };


//utilizador_create
controller.utilizador_create = async (req, res, next) => {
    const { username, nome, email, data_nascimento, pass, id_tipo, genero}  = req.body;
    //const { imagem } = JSON.stringify(req.file.path);
    //console.log(" =>" + JSON.stringify(req.file.path));
    
    const dados = await utilizador.create({
        username: username,
        nome: nome,
        email: email,
        data_nascimento: data_nascimento,
        pass: pass,
        id_tipo: id_tipo,
        //imagem: JSON.stringify(req.file.path),
        genero: genero,
        
    })
    .then(function(dados){
        console.log(dados);
        return dados;
    })
    .catch(error => {
        res.status(500).send({
            message: error.message || "Ocorreu um erro ao tentar registar o utilizador",

        });
    });
    res.status(201).json({
        success: true,
        dados: dados,
      });
    };



//utilizador_update
controller.utilizador_update = async (req, res) => {

        const {id} = req.params;
        const {username, nome, genero, email, data_nascimento, data, pass, id_tipo, biografia, imagem, repor_pass} = req.body;
        const dados = await utilizador.update({
            
            username: username,
            nome: nome,
            genero: genero,
            email: email,
            data_nascimento: data_nascimento,
            data: data,
            pass: pass,
            id_tipo: id_tipo,
            biografia: biografia,
            imagem: imagem,
            repor_pass: repor_pass,
        }, {
            where: { id_utilizador: id }, include: ["tipo_utilizador"]
        })
        .then(function(dados){
            console.log(dados);
            return dados;
        })
        .catch((error) => {
            res.status(500).send({
              message: error.message || "Ocorreu um erro ao tentar atualiza os dados do aluno.",
            });
        });
        res.json({
            success: true,
            dados: dados,
          });
        };

//utilizador_delete
controller.utilizador_delete = async (req, res) => {

    const { id } = req.params;
    const dados = await utilizador.destroy({ where: { id_utilizador: id } }).catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao tentar remover o utilizador.",
      });
    });

    res.status(204).json({
      success: true,
      dados: dados,
    });
  };


//genero_utilizador_detail
controller.genero_utilizador_detail = async (req, res) => {
    const {genero} = req.params;
    const dados = await utilizador.findAll({ where: { genero : genero } })
        .then(function (dados) {
            return dados;
        })
        .catch((error) => {
            res.status(500).send({
              message: error.message || "Ocorreu um erro ao carregar os dados dos utilizadores.",
            });
          });

          res.json({
            success: true,
            dados: dados,
          });
        };


//tipo_utilizador_detail
controller.tipo_utilizador_detail = async (req, res) => {
    const {id} = req.params;
    const dados = await utilizador.findAll({ where: { id_tipo: id }, include: ["tipo_utilizador"] 
  })
        .then(function (dados) {
            return dados;
        })
        .catch((error) => {
            res.status(500).send({
              message: error.message || "Ocorreu um erro ao carregar os dados dos utilizadores.",
            });
          });

          res.json({
            success: true,
            dados: dados,
          });
        };



        const secret = 'mysecretsshhh';
                        
        
//utilizador_login
controller.utilizador_login = async (req, res) => {
  const {username, pass} = req.body;
  const dados = await utilizador.findOne({where: { username: username } })
  if(!dados){
  return res.status(400).send({ error: 'Utilizador não encontrado.'})
  }

  if(pass !== dados.pass){
    return res.status(400).send({ error: 'Password Inválida'})
  } else {
  const payload = { username };
    const token = jwt.sign(payload, secret, {
      expiresIn: '1h'
    });
    
    //res.cookie('token', token, { httpOnly: true }).sendStatus(200);

    res.json({
      success: true,
      dados: dados,
  });


  }
    
         };
      


//utilizador_img_update
controller.utilizador_img_update = async (req, res) => {

  const {id} = req.params;
  const dados = await utilizador.update({
      
  
      imagem: JSON.stringify(req.file.path),
    
  }, {
      where: { id_utilizador: id }, include: ["tipo_utilizador"]
  })
  .then(function(dados){
      console.log(dados);
      return dados;
  })
  .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao tentar atualizar a imagem do utilizador.",
      });
  });
  res.json({
      success: true,
      dados: dados,
    });
  };



module.exports = controller;