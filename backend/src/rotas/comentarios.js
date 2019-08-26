const express = require('express')
const router = express.Router()

router.get('/comentarios/:postid', (req, res) => {
    res.json({
        conteudo: 'top',
        autor: 'anonimo'
    })
})

module.exports = router