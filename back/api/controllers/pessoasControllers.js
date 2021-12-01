const conexao = require('../../config/conexao')

module.exports = {
    pessoasGetAll,
    pessoasById,
    pessoasNew,
    pessoasEdit
}

function pessoasGetAll(req, res){
    conexao.query('select * from pessoa_pes', (err, resultado)=> {
        if(err)throw err
        res.json(resultado)
    })
}

function pessoasById(req, res){
    let codigo = req.params.id

    conexao.query('select * from pessoa_pes where pes_codigo =?', [codigo], (err, resultado)=> {
        if(err)throw err
        res.json(resultado)
    })
}

function pessoasNew(req, res){
    let codigo = req.body
    codigo.pes_codigo = null

    conexao.query('insert into pessoa_pes set ?', [codigo], (err, resultado)=> {
        if(err)throw err
        res.json(resultado)
    })
}

function pessoasEdit(req, res){
    let codigo = req.body
    
    const sql = "update pessoa_pes set pes_nome = '" + codigo.pes_nome + 
    "', pes_apelido = '" + codigo.pes_apelido + 
    "', pes_sexo = '" + codigo.pes_sexo +
    "', pes_dtnascimento = '" + codigo.pes_dtnascimento + 
    "' where pes_codigo = '" + codigo.pes_codigo

    conexao.query(sql, (err, resultado)=> {
        if(err)throw err
        res.json(resultado)
    })
}