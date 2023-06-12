var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.get("/obterVotos", function (req, res) {
    dashController.obterVotos(req, res);
});


module.exports = router;