var constantes = require('../consts');
var db = require('../../baseDB') ;

// Stage 01 - Boas Vindas

function execute(text){
    db.bancoDeDados[0].stage = 2 ;
    return [constantes.boasVindas,constantes.cardapio]
}

exports.execute = execute ;