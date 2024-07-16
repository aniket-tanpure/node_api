// const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import mysqlpool from './config/db.js'
import userrouters from './routes/userRoutes.js'
dotenv.config();

const app = express();

app.use('/api/v1/users', userrouters);
app.get("/",(req,res)=>{
    res.send('<h1> Welcome to myMy Job Portal</<h1>')
});

const PORT = process.env.PORT

mysqlpool.promise().query('SELECT 1').then(()=>{

    console.log(`mysql db connected`);
    app.listen(PORT,()=>{
        console.log(`Node server is is running on port ${PORT} `);
    });
    
}).catch((error)=>{
    console.log(error);
});



