const express = require('express');
const cors = require('cors');
const bodyParser = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const withAuth = require('./middleware');

//configurações
app.set('port', process.env.port || 3001);
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cookieParser());

//middleware
app.use(express.json());
app.use('/uploads', express.static('uploads'));


//CORS (Cross-Origin Resource Sharing)
app.use(cors());

//parser
app.use(bodyParser.urlencoded({ extended: true }));


//routes
const utilizadorroute = require('./routes/main.route');
app.use('/api/v1', utilizadorroute);

app.get('/checkToken', withAuth, function(req, res) {
    res.sendStatus(200);
  });

//servidor
app.listen(app.get('port'), () => {
    console.log('Servidor iniciado na porta: '+ app.get('port'));
    });