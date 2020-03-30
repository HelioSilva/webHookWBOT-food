var bancoDeDados = [];

function getStage(user){
  let stage  = -1 ;
  bancoDeDados.forEach( tupla => {
    if (tupla.contato == user) {
      stage = tupla.stage;
    }    
  });


  if (stage == -1){
    bancoDeDados.push({contato:user,stage:1,itens:[]});
    return 1 
  } else {
    return stage
  }

}

module.exports = {
    bancoDeDados:bancoDeDados,
    getStage: getStage
}