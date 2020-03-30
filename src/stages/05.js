var constantes = require('../consts');
var db = require('../../baseDB') ;

// Stage 05 - Encerramento

function execute(text){

    db.bancoDeDados[0].stage = 0 ; 

    return ["Seu pedido foi recebido com sucesso!!!!!","Aguarde, em breve seu pedido chegará até você"];
}

exports.execute = execute ;



  