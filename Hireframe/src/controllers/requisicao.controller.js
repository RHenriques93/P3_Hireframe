// Controller + MVC -> Editar Código do ficheiro requesicao.controller.js
const requisicao= require('../models/requisicao.model');


// comunicação com a base de dados
const sequelize = require('../config/database');

const controller = {}


//requisicao_list
controller.requisicao_list = async (req, res) => {
    const dados = await requisicao.findAll({   include: ["subarea", "utilizador"]
    })
        .then(function (dados) {
            return dados;
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Ocorreu um erro ao carregar os dados das requesições.",
        });
    });
    console.log(dados);
    res.json({
      success: true,
      dados: dados,
    });
  };


//requisicao_detail
controller.requisicao_detail = async (req, res) => {
    const {id} = req.params;
    const dados = await requisicao.findAll({ where: { id_requisicao: id }, include: { all: true, nested: true }
      })
        .then(function (dados) {
            return dados;
        })
        .catch((error) => {
            res.status(500).send({
              message: error.message || "Ocorreu um erro ao carregar os dados da requesição.",
            });
        });
            res.json({
                success: true,
                dados: dados,
              });
            };


//requisicao_create
controller.requisicao_create = async (req, res) => {
    const { id_utilizador, id_subarea, descricao, nome_projeto, preco, img_req}  = req.body;
    const dados = await requisicao.create({
       
        id_utilizador: id_utilizador,
        id_subarea: id_subarea,
        descricao: descricao,
        nome_projeto: nome_projeto,
        preco: preco,
        img_req: img_req,
   
    })
    .then(function(dados){
        return dados;
    })
    .catch(error => {
        res.status(500).send({
            message: error.message || "Ocorreu um erro ao tentar registar a requesição",

        });
    });
    res.status(201).json({
        success: true,
        dados: dados,
      });
    };



//requisicao_update
controller.requisicao_update = async (req, res) => {

        const {id} = req.params;
        const {id_requisicao, id_utilizador, id_subarea, descricao, nome_projeto, preco, img_req} = req.body;
        const dados = await requisicao.update({
        
            id_requisicao: id_requisicao,
            id_utilizador: id_utilizador,
            id_subarea: id_subarea,
            descricao: descricao,
            nome_projeto: nome_projeto,
            preco: preco,
            img_req: img_req,

        }, {
            where: { id_requisicao: id }, include: ["subarea"]
        })
        .then(function(dados){
            return dados;
        })
        .catch((error) => {
            res.status(500).send({
              message: error.message || "Ocorreu um erro ao tentar atualizar os dados da requesição.",
            });
        });
        res.json({
            success: true,
            dados: dados,
          });
        };


//requisicao_delete
controller.requisicao_delete = async (req, res) => {

    const { id } = req.params;
    const dados = await requisicao.destroy({ where: { id_requisicao: id } }).catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao tentar remover o serviço.",
      });
    });
}

//utilizador_requisicao_detail
controller.utilizador_requisicao_detail = async (req, res) => {
    const {id} = req.params;
    const dados = await requisicao.findAll({ where: { id_utilizador: id }, include: ["subarea"] })
        .then(function (dados) {
            return dados;
        })
        .catch((error) => {
            res.status(500).send({
              message: error.message || "Ocorreu um erro ao carregar os dados dos serviços.",
            });
          });

          res.json({
            success: true,
            dados: dados,
          });
        };


module.exports = controller;