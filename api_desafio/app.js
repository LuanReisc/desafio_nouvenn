const express = require('express');
const app = express();
var cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routerUser = require('./routes/user');
const routerBook = require('./routes/book');
const routerLoan = require('./routes/loan');


app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use('/user', routerUser);
app.use('/loan', routerLoan);
app.use('/book', routerBook);

app.use((req, res, next) =>
{
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next )=>
{
    res.status(error.status || 500)
    return res.send({
        erro:
        {
            mensagem: error.message
        }
    })
});
module.exports= app;


