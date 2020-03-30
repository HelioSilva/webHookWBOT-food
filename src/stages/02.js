var constantes = require('../consts');
var db = require('../../baseDB') ;

// Stage 02 - Escolha de itens

const mensagem = " ```Produto adicionado com sucesso! \n\ Continue fazendo os pedidos ou digite # para fechar pedido.``` ";

function execute(text){
    let resposta = [];
    switch (text) {
        case '1':
          db.bancoDeDados[0].itens.push(
            {
              descricao: "X-Burguer",
              preco: 10.90
            }  
          )    
          resposta.push(mensagem);   
          break;
        case '2':
            db.bancoDeDados[0].itens.push(
              {
                descricao: "Passaporte",
                preco: 7
              }  
            ) 
            resposta.push(mensagem);
            break;
        case '#':
            resposta.push("Estou fechando o pedido, confirme o *endereço* por favor:");
            db.bancoDeDados[0].stage = 3 ;
            break;
      
        default:
          resposta.push('Opcao digitada está invalida!')
          break;
      }
  
      return resposta ;
}

exports.execute = execute ;