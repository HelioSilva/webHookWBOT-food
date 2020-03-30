var constantes = require('../consts');
var db = require('../../baseDB') ;

// Stage 04 - Resumo do Pedido

function execute(text){
    //Resumo do Pedido
 
    if(text == 'OK'){

        db.bancoDeDados[0].stage = 0 ; 

        return ["Seu pedido foi recebido com sucesso!!!!!","Aguarde, em breve seu pedido chegará até você"];

    }


        let total = 0 ;
        let men = '';
        db.bancoDeDados[0].itens.forEach(item => {
        total += item.preco ;
        men += `${item.descricao}   R$ ${item.preco}\n\ `;
        });

        return ['Irei exibir um resumo do seu pedido:',men,`  *Total* : R$ ${total.toString()}`  ];
    
     
    
}

exports.execute = execute ;


