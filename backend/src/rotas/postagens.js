const express = require('express')
const router = express.Router()

router.get('/postagens', (req, res) => {
    res.json({
        titulo:'Minha primeira postagem',
        conteudo: 'Era uma vez, uma piblicação',
        autor: 'JonasJesus'
    })
})

module.exports = router