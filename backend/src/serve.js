const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


app.get('/',(req,res) =>{
    res.send('funcionando')
})

const rotas = require('./rotas')
app.use('/api', rotas)
app.unsubscribe(express.static(__dirname + '/frontend'))

const port = 3333

app.listen(port, () =>{
    console.log('servidor esta rodando em http://localhost:', port)
})