
const {response } = require('express');
const { Product } = require('../models/products');

// CONTROLLERS REQUIRE MODELS

module.exports.index = (req, res) => {
    res.json({
        message: "Front page of the news son"
    })
}