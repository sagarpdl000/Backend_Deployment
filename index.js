require('dotenv').config();
const express = require('express');


const app = express();

const port =3000

app.get('/',(req,res)=>{

    res.send('hello worlddddd')

}),

app.get('/test', (req, res)=>{

    res.send('test')
})

app.get('/login', (req, res)=>{
    res.send('<h1>Hello sagar poudel.</h1>')
})

app.listen(process.env.PORT, ()=>{
    console.log(`Listening on port ${process.env.PORT}`)
})