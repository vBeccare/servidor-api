const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');


// <---- gerenciador-de-tarefas ---->
const { listarTarefaId, listarTarefas, cadastrarTarefa, atualizarTarefa, removerTarefa, concluirTarefa } 
= require('./controllers/gerenciador-de-tarefas.js');

// <---- mini-ecommerce ---->
const { finalizarCompra, cidadesPorEstado } 
= require('./controllers/mini-ecommerce.js');

// <---- upload ---->
const { upload }  = require('./controllers/upload.js');




const app = express();
const port = 3010;

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());
app.use(fileUpload({ createParentPath: true }));

// listar todas as tarefas - get
app.get('/gerenciador-de-tarefas', listarTarefas );
// listar uma tarefa por ID - get
app.get('/gerenciador-de-tarefas/:id', listarTarefaId);
// cadastrar uma tarefa - post
app.post('/gerenciador-de-tarefas', cadastrarTarefa);
// atualizar uma tarefa - put
app.put('/gerenciador-de-tarefas/:id', atualizarTarefa);
// deletar uma tarefa - delete
app.delete('/gerenciador-de-tarefas/:id', removerTarefa);
// concluir uma tarefa - put
app.put('/gerenciador-de-tarefas/:id/concluir', concluirTarefa)


// <---- mini-ecommerce ---->
app.post('/mini-ecommerce/checkout/finalizar-compra', finalizarCompra);
app.get('/mini-ecommerce/estado/:siglaEstado/cidades', cidadesPorEstado);

// <---- upload ---->
app.post('/upload', upload);

app.listen(port, () => console.log(`Servidor inicializado na porta ${port}`))
