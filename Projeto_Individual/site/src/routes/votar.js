var express = require("express");
var router = express.Router();

var votarController = require("../controllers/votarController");

router.post("/votar/:idUsuario/:idPersonagem", function (req, res) {
    votarController.votar(req, res);
})

module.exports = router;