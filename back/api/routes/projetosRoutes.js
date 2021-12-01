const  controllersProjetos = require('../controllers/projetosControlerrs.js')

server.get('/projetos', controllersProjetos.projetosGetAll)

server.get('/projetos/:id',controllersProjetos.projetosById)

server.post('/projetos', controllersProjetos.projetosNew)

server.put('/projetos/:id', controllersProjetos.projetosEdit)