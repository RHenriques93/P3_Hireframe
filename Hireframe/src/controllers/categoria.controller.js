// Controller + MVC -> Editar Código do ficheiro area.controller.js
const area = require('../models/area.model');
const subarea = require('../models/subarea.model');

// comunicação com a base de dados
const sequelize = require('../config/database');

const controller = {}


//area_list
controller.area_list = async (req, res) => {
    const dados = await area.findAll()
        .then(function (dados) {
            return dados;
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Ocorreu um erro ao carregar os dados das areas.",
        });
    });
    console.log(dados);
    res.json({
      success: true,
      dados: dados,
    });
  };

//area_detail
controller.area_detail = async (req, res) => {
    const {id} = req.params;
    const dados = await area.findAll({ where: { id_area: id } })
        .then(function (dados) {
            return dados;
        })
        .catch((error) => {
            res.status(500).send({
              message: error.message || "Ocorreu um erro ao carregar os dados da area.",
            });
        });
            res.json({
                success: true,
                dados: dados,
              });
            };

//area_create
controller.area_create = async (req, res) => {
    const { nome, descricao, data, img_area}  = req.body;
    const dados = await area.create({
      
        nome: nome,
        descricao: descricao,
        data: data,
        img_area: img_area,
    })
    .then(function(dados){
        return dados;
    })
    .catch(error => {
        res.status(500).send({
            message: error.message || "Ocorreu um erro ao tentar criar a area",

        });
    });
    res.status(201).json({
        success: true,
        dados: dados,
      });
    };



//area_update
controller.area_update = async (req, res) => {

        const {id} = req.params;
        const {nome, descricao, data, img_area} = req.body;
        const dados = await area.update({
            id_area: id_area,
            nome: nome,
            descricao: descricao,
            data: data,
            img_area: img_area,
        }, {
            where: { id_area: id }
        })
        .then(function(dados){
            return dados;
        })
        .catch((error) => {
            res.status(500).send({
              message: error.message || "Ocorreu um erro ao tentar atualizar os dados da area.",
            });
        });
        res.json({
            success: true,
            dados: dados,
          });
        };


//area_delete
controller.area_delete = async (req, res) => {

    const { id } = req.params;
    const dados = await area.destroy({ where: { id_area: id } }).catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao tentar remover o serviço.",
      });
    });
}


//area_list
controller.area_main_list = async (req, res) => {
  const dados = await area.findAll({limit: 4, order: sequelize.random()})
      .then(function (dados) {
          return dados;
      })
      .catch(error => {
          res.status(500).send({
              message: error.message || "Ocorreu um erro ao carregar os dados das areas.",
      });
  });
  console.log(dados);
  res.json({
    success: true,
    dados: dados,
  });
};




//subarea_list
controller.subarea_list = async (req, res) => {
    const dados = await subarea.findAll()
        .then(function (dados) {
            return dados;
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Ocorreu um erro ao carregar os dados das subareas.",
        });
    });
    console.log(dados);
    res.json({
      success: true,
      dados: dados,
    });
  };
//subarea_detail
controller.subarea_detail = async (req, res) => {
    const {id} = req.params;
    const dados = await subarea.findAll({ where: { id_subarea: id } })
        .then(function (dados) {
            return dados;
        })
        .catch((error) => {
            res.status(500).send({
              message: error.message || "Ocorreu um erro ao carregar os dados da subarea.",
            });
        });
            res.json({
                success: true,
                dados: dados,
              });
            };

//subarea_create
controller.subarea_create = async (req, res) => {
    const { nome, data, id_area, img_subarea}  = req.body;
    const dados = await subarea.create({
      
        nome: nome,
        data: data,
        img_subarea: img_subarea,
        id_area: id_area,
    })
    .then(function(dados){
        return dados;
    })
    .catch(error => {
        res.status(500).send({
            message: error.message || "Ocorreu um erro ao tentar criar a subarea.",

        });
    });
    res.status(201).json({
        success: true,
        dados: dados,
      });
    };



//subarea_update
controller.subarea_update = async (req, res) => {

        const {id} = req.params;
        const {nome, data, id_area, img_subarea} = req.body;
        const dados = await subarea.update({
            id_subarea: id_subarea,
            id_area: id_area,
            nome: nome,
            data: data,
            img_subarea: img_subarea,

        }, {
            where: { id_subarea: id }
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


//subarea_delete
controller.subarea_delete = async (req, res) => {

    const { id } = req.params;
    const dados = await subarea.destroy({ where: { id_subarea: id } }).catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao tentar remover a subarea.",
      });
    });
}

//subarea_area_detail
controller.subarea_area_detail = async (req, res) => {
    const {id} = req.params;
    const dados = await subarea.findAll({ where: { id_area: id }, include: {model: area, required: true}  })
        .then(function (dados) {
            return dados;
        })
        .catch((error) => {
            res.status(500).send({
              message: error.message || "Ocorreu um erro ao carregar os dados das subareas.",
            });
          });

          res.json({
            success: true,
            dados: dados,
          });
        };



module.exports = controller;