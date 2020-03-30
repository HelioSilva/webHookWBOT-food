var constantes = require('../consts');
var db = require('../../baseDB') ;

// Stage 03 - Cnofirmação de endereço

function execute(text){

    let resposta = [];
    
    switch (text) {
        case "S":          
          db.bancoDeDados[0].stage = 4 ;     
          let total = 0 ;
          let men = '';
          db.bancoDeDados[0].itens.forEach(item => {
          total += item.preco ;
          men += `${item.descricao}   R$ ${item.preco}\n\ `;
          });
  
          resposta.push(' *Irei exibir um resumo do seu pedido* ',men,`*Total* : R$ ${total.toString()}`,"Digite OK para finalizar o pedido.");   
          break;

        case "N":
          resposta.push("Digite o seu endereço");
          break;
      
        default:
          resposta.push("Confirma esse endereço?","Digite *S* para confirmar ou *N* para digitar novo endereço.") 
          break;
      }  

    return resposta;
}

exports.execute = execute ;