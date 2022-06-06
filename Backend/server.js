const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config');
const cors = require('cors');
const productController = require('./controllers/product.controller');//Product
const registerController = require('./controllers/register.controller');

//
require('./db/conn');
//const Register = require('./models/registerSchema');
//app.use(require('./router/auth');

//



const app = express();

//old
//const PORT = 5000;

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/product',productController);//product

app.use('/register',registerController);

//

//app.get('/register',(req,res)=>{
 //res.send('Hello from register');
//});


app.get('/login',(req,res)=>{
    res.send('Hello from login');
});

//






app.listen(PORT, ()=> console.log(`Server running on: http://localhost:${PORT}/`));

 