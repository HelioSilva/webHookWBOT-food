const stages = [{
    "1":{
        descricao:"Boas Vindas",
        obj: require('./src/stages/01')
    },
    "2":{
        descricao:"Selecao de itens",
        obj: require('./src/stages/02')
    },
    "3":{
        descricao:"Confirmação de Endereço",
        obj: require('./src/stages/03')
    },
    "4":{
        descricao:"Resumo do pedido",
        obj: require('./src/stages/04')
    },
    "5":{
        descricao:"Encerramento",
        obj: require('./src/stages/05')
    },
}]

exports.stages = stages ;
