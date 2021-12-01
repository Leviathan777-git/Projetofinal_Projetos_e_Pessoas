const conexao = require('../../config/conexao')

module.exports = {
    projetosGetAll,
    projetosById,
    projetosNew,
    projetosEdit
}

function projetosGetAll(req, res){
    conexao.query('select * from projeto_prj', (err, resultado)=> {
        if(err)throw err
        res.json(resultado)
    })
}

function projetosById(req, res){
    let codigo = req.params.id

    conexao.query('select * from projeto_prj where prj_codigo =?', [codigo], (err, resultado)=> {
        if(err)throw err
        res.json(resultado)
    })
}

function projetosNew(req, res){
    let codigo = req.body
    codigo.prj_codigo = null

    conexao.query('insert into projeto_prj set ?', [codigo], (err, resultado)=> {
        if(err)throw err
        res.json(resultado)
    })
}

function projetosEdit(req, res){
    let codigo = req.body
    
    const sql = "update projeto_prj set prj_tipo = '" + codigo.prj_tipo + 
    "', prj_descricao = '" + codigo.prj_descricao + 
    "', prj_iniciativa = '" + codigo.prj_iniciativa +
    "', prj_dtinicio = '" + codigo.prj_dtinicio +
    "', pes_codigo = '" + codigo.pes_codigo +
    "' where prj_codigo = '" + codigo.prj_codigo

    conexao.query(sql, (err, resultado)=> {
        if(err)throw err
        res.json(resultado)
    })
}