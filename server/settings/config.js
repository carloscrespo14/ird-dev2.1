'use strict'
const ip = require('ip')
const port = 3000
const url = ip.address()

console.log(url)

module.exports = {
    PORT:process.env.PORT || port,
    DB: process.env.MONGODB || 'mongodb://localhost:27017/apidb',
    URL:url
}