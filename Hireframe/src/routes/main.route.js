const express = require('express');
const router = express.Router();
const multer = require('multer');


//Importa os Controladores
const utilizadorController = require('../controllers/utilizador.controller');
const servicoController = require('../controllers/servico.controller');
const requisicaoController = require('../controllers/requisicao.controller');
const categoriaController = require('../controllers/categoria.controller');

// ---------------------------------------------


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});


const fileFilter = (req, file, cb) => {
    //reject a file
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
    cb(null, true);
} else {
    cb(null, false);
} 
};

const upload = multer({
    storage: storage, 
    limits: {
    fileSize: 1024 * 1024 * 5  
}//,
//fileFilter: fileFilter
});

const withAuth = require('../middleware');



//utilizadores
router.get('/utilizadores',utilizadorController.utilizador_list);
router.get('/utilizador/:id', utilizadorController.utilizador_detail);
router.post('/utilizador', /*upload.single('imagem'),*/ utilizadorController.utilizador_create);
router.put('/utilizador/:id', utilizadorController.utilizador_update);
router.delete('/utilizador/:id', utilizadorController.utilizador_delete);
router.get('/genero_utilizador/:genero', utilizadorController.genero_utilizador_detail);
router.get('/tipo_utilizador/:id', utilizadorController.tipo_utilizador_detail);

router.post('/login', utilizadorController.utilizador_login);

router.put('/img_utilizador/:id', upload.single('imagem'), utilizadorController.utilizador_img_update);


// ---------------------------------------------

//serviços
router.get('/servicos', servicoController.servico_list);
router.get('/servico/:id', servicoController.servico_detail);
router.post('/servico', servicoController.servico_create);
router.put('/servico/:id', servicoController.servico_update);
router.delete('/servico/:id', servicoController.servico_delete);

router.get('/utilizador_servico/:id',servicoController.utilizador_servico_detail);
router.get('/subarea_servico/:id', servicoController.subarea_servico_detail);

router.put('/preco_servico/:id', servicoController.preco_update);
router.post('/preco_servico', servicoController.preco_create);
router.delete('/preco_servico/:id', servicoController.preco_delete);


router.put('/img_servico/:id', upload.single('imagem'), servicoController.servico_img_update);

// ---------------------------------------------

//requisicoes
router.get('/requisicoes', requisicaoController.requisicao_list);
router.get('/requisicao/:id', requisicaoController.requisicao_detail);
router.post('/requisicao', requisicaoController.requisicao_create);
router.put('/requisicao/:id', requisicaoController.requisicao_update);
router.delete('/requisicao/:id', requisicaoController.requisicao_delete);
//
router.get('/utilizador_requisicao/:id', requisicaoController.utilizador_requisicao_detail);

router.put('/img_requisicao/:id', upload.single('imagem'), requisicaoController.requisicao_img_update);

// ---------------------------------------------

//categorias
router.get('/areas', categoriaController.area_list);
router.get('/area/:id', categoriaController.area_detail);
router.post('/area', categoriaController.area_create);
router.put('/area/:id', categoriaController.area_update);
router.delete('/area/:id', categoriaController.area_delete);
router.get('/areas_main', categoriaController.area_main_list);
//
router.get('/subareas', categoriaController.subarea_list);
router.get('/subarea/:id', categoriaController.subarea_detail);
router.post('/subarea', categoriaController.subarea_create);
router.put('/subarea/:id', categoriaController.subarea_update);
router.delete('/subarea/:id', categoriaController.subarea_delete);
//
router.get('/subarea_area/:id', categoriaController.subarea_area_detail);

// ---------------------------------------------


//exportação do módulo
module.exports = router;