var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController")
router.get("/atualizar_grafico", function(req, res){
dashController.atualizarGrafico(req, res)
    
})

module.exports = router;

