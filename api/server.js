const express = require("express");

const Router = require('../accounts/accounts-router.js');

const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());

server.use('/api/accounts', Router)

server.get('/', (req, res) => {
    res.send('<h1>HI<h1>')
})

module.exports = server;
