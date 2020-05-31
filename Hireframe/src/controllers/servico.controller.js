// Controller + MVC -> Editar Código do ficheiro servico.controller.js
const servico = require('../models/servico.model');
const preco = require('../models/preco.model');

// comunicação com a base de dados
const sequelize = require('../config/database');

const controller = {}


//servico_list
controller.servico_list = async (req, res) => {
    const dados = await servico.findAll({  include: ["preco_servico", "subarea", "utilizador"]
        })
        .then(function (dados) {
            return dados;
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Ocorreu um erro ao carregar os dados dos serviços.",
        });
    });
    console.log(dados);
    res.json({
      success: true,
      dados: dados,
    });
  };

//servico_detail
controller.servico_detail = async (req, res) => {
    const {id} = req.params;
    const dados = await servico.findAll({ where: { id_servico: id }, include: { all: true, nested: true }
  })
        .then(function (dados) {
            return dados;
        })
        .catch((error) => {
            res.status(500).send({
              message: error.message || "Ocorreu um erro ao carregar os dados do serviço.",
            });
        });
            res.json({
                success: true,
                dados: dados,
              });
            };

//servico_create
controller.servico_create = async (req, res) => {
  const {id} = req.params;
    const { id_utilizador, id_subarea, data, descricao}  = req.body;
    const dados = await servico.create({where: { id_servico: id }, include:["preco_servico"],
       
        id_utilizador: id_utilizador,
        id_subarea: id_subarea,
        data: data,
        descricao: descricao,
   
    })
    .then(function(dados){
        return dados;
    })
    .catch(error => {
        res.status(500).send({
            message: error.message || "Ocorreu um erro ao tentar registar o serviço",

        });
    });
    res.status(201).json({
        success: true,
        dados: dados,
      });
    };



//servico_update
controller.servico_update = async (req, res) => {

        const {id} = req.params;
        const {id_utilizador, id_subarea, descricao, id_servico} = req.body;
        const dados = await servico.update({ 
            id_servico: id_servico,
            id_utilizador: id_utilizador,
            id_subarea: id_subarea,
            descricao: descricao,
     
        
      
        }, {
            where: { id_servico: id}, include: ["subarea", "utilizador", "preco_servico"]
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

//servico_delete
controller.servico_delete = async (req, res) => {

    const { id } = req.params;
    const dados = await servico.destroy({ where: { id_servico: id } }).catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao tentar remover o serviço.",
      });
    });

    res.status(204).json({
      success: true,
      dados: dados,
    });
  };


//utilizador_servico_detail
controller.utilizador_servico_detail = async (req, res) => {
    const {id} = req.params;
    const dados = await servico.findAll({ where: { id_utilizador: id }, include: ["subarea", "preco_servico", "utilizador"]})
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


controller.subarea_servico_detail = async (req, res) => {
    const {id} = req.params;
    const dados = await servico.findAll({ where: { id_subarea: id }, include: ["subarea", "preco_servico", "utilizador",
  ]})
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


        controller.preco_update = async (req, res) => {

          const {id} = req.params;
          const {base, padrao, premium, id_servico} = req.body;
          const dados = await preco.update({ 
         base: base,
         padrao: padrao,
         premium: premium,
         id_servico: id_servico
          }, {
              where: { id_preco_servico: id}
          })
          .then(function(dados){
            console.log(dados);
            return dados;
        })
        .catch((error) => {
            res.status(500).send({
              message: error.message || "Ocorreu um erro ao tentar atualiza os dados do preço.",
            });
        });
        res.json({
            success: true,
            dados: dados,
          });
        };


//servico_create
controller.preco_create = async (req, res) => {
  const {id} = req.params;
    const { id_servico, base, padrao, premium}  = req.body;
    const dados = await preco.create({where: { id_preco_servico: id },
       
        id_servico: id_servico,
        base: base,
        padrao: padrao,
        premium: premium,
   
    })
    .then(function(dados){
        return dados;
    })
    .catch(error => {
        res.status(500).send({
            message: error.message || "Ocorreu um erro ao tentar registar o preço do serviço",

        });
    });
    res.status(201).json({
        success: true,
        dados: dados,
      });
    };



module.exports = controller;