const express = require("express");
const formcontroller = require('../Controller/FormController');
const route =express.Router();
console.log("router loaded");

route.post('/form',formcontroller.Form);
module.exports = route;