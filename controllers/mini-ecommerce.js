const cidadesEstados = require('../cidades-estados.json');

function finalizarCompra(req, res){
   console.log(req.body);
  
   res.send('ok');
}
function cidadesPorEstado(req, res) {
   const siglaEstado = req.params['siglaEstado'].toUpperCase();
   const dadosEstado = cidadesEstados.estados.filter(estado => estado.sigla === siglaEstado);
   if(dadosEstado.length === 0){
      res.status(404).json( {erro: `${siglaEstado} não é um estado válido.`});
   }
   res.json(dadosEstado[0].cidades);
}

// para ter ctz q vai importar para o arquivo index
module.exports = {
   finalizarCompra,
   cidadesPorEstado
}

