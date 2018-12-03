'use strict'

const express = require('express')
const router = express.Router()
const config = require('../settings/config')



router.get('/',(req, res)=>{
    res.json({
        response:'OK',
        type: 'INFO',
        endpoints:{
            GET:{
                PATH:`http://${config.URL}:${config.PORT}/api/queries`,
                PATH1:`http://${config.URL}:${config.PORT}/api/cases`,
            },
            POST:{
                PATH:`http://${config.URL}:${config.PORT}/api/cases/add`,
            }
        }
    })
})

module.exports = router