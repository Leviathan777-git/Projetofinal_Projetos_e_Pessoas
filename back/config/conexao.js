const mysql = require('mysql2')
const database = 'dados212n'

const conexao = mysql.createConnection({
    user:'root',
    password:'Gabre276',
    host:'localhost',
    port:3306
})

conexao.connect((err)=>{
    if (err){
        console.log('Erro de Conexão', err);
        return
    }
    conexao.query('USE ' + database)
    console.log('\nConexão Estabelecida');
})

module.exports = conexao;