'use strict'

const express = require('express')
const router = express.Router()

const queriesCtrl = require('../controllers/quieries.controllers')

router.get('/:search',queriesCtrl.getQuery)


module.exports = router