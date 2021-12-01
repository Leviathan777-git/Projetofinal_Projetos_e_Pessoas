const controllersPessoas = require('../controllers/pessoasControllers.js')

server.get('/pessoas', controllersPessoas.pessoasGetAll)

server.get('/pessoas/:id',controllersPessoas.pessoasById)

server.post('/pessoas', controllersPessoas.pessoasNew)

server.put('/pessoas/:id', controllersPessoas.pessoasEdit)