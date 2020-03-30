const express = require('express')
const app = express()
const port = 3001;
var bodyParser = require('body-parser');

var core = require('./core');

var db = require('./baseDB');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//allowing requests from outside of the domain 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept");
  next();
});

function responseRES(res,obj){

  let resposta = [];

  for (let index = 0; index < obj.length; index++) {
    const element = obj[index];
    resposta.push({
      "text": element,
      "type" : "message"
    })
    
  }

  res.send(resposta);
}


app.post('/api/incoming-webhook', (req, res) => {

  const step = db.getStage(req.body.user);
  const textoRecebido = req.body.text.toUpperCase() ;

  console.log("-> Estágio : "+core.stages[0][step.toString()].descricao);
  responseRES(res,core.stages[0][step.toString()].obj.execute(textoRecebido))


  // if( ut.isSaudacao(req.body.text) ){
  //   res.send( [
  //       {
  //         "text":"Texto acima é uma saudação conhecida.",
  //         "type" : "message",
          
  //       }
  //     ]
  //   )
  // }else{
  //   res.send( [
  //       {
  //         "text":"Texto acima não uma saudação conhecida.",
  //         "type" : "message",
          
  //       }
  //     ]
  //   )
  // }

  // if (req.body.text == 'file'){
  //   var fs   = require('fs'),  
  //   file = process.argv[2],
  //   data = 'C://Users//Hélio Silva//Desktop//chatBot3//WBOT//src//github.png';

  //   var fileMime = 'image/png';
  //   var archive = fs.readFileSync(data,{ encoding: 'base64' });

  //   res.send(  
  //   [{
  //       "text": "Look>=, quick replies!",
  //       "type": "message",
  //       "files":[{
  //           "name":"foto.jpg",
  //           "file": `data:${fileMime};base64,${archive}`  
  //       }]
  //     }
  //   ])    
  // }
   
    // return {
    //   "text": "Look, quick replies!",
    //   "type": "message",
    //   "files":[{
    //       "name":"teste2",
    //       "file":data.toString('base64')
    //   }]
    // }
  
  


  //console.log(req.params);
  // res.send(  
  //   [{
  //     "text": "Treinando BOT(Desconcidere a resposta)",
  //     "type": "message"
  //   }]
  // )

} )
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => {
  // console.log(core.stages)
  console.log(`Example app listening on port ${port}!`);

} )