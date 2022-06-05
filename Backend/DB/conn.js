const mongoose = require('mongoose');




mongoose.connect(process.env.DB_CONNECTION, ()=>{
    console.log('Database connected');
})