'use strict'

const express = require('express')
const router = express.Router()

const casesCtrl = require('../controllers/cases.controllers')
router.get('/', casesCtrl.findThemAll)
router.get('/:id', casesCtrl.findOneCase)
router.post('/add',casesCtrl.addOne)


module.exports = router