import React from "react"
import './PessoasEditar.css';
import urlapi from "../../services/api.js"

import { useEffect, useState } from 'react';

import { useParams, Link } from "react-router-dom";

export default function PessoasEditar() {
    let idBoolean = false;        // edição

    const [codigo, setCodigo] = useState(0);

    const [nome, setNome] = useState('');
    const [apelido, setApelido] = useState('');
    const [sexo, setSexo] = useState('');
    const [dtaNascimento, setDtaNascimento] = useState('')
    const [checked, setChecked] = useState(false);

    const { idPessoas } = useParams();

    function IfCrud() {
        console.log('Id Pessoa: ' + idPessoas + ' - ' + idBoolean)
        if (idPessoas === 0) {

            idBoolean = true;
        } else {
        }
    }

    useEffect(() => {
        async function getPessoas() {
            console.log('Pessoa: ' + idPessoas + ' - ' + idBoolean)
            if (idPessoas == 0) {
                setChecked(true);
                console.log('Inclusão de novo registro!')
            } else {

                const { data } = await urlapi.get('/pessoas/' + idPessoas);
                console.log(data)

                setCodigo(data[0].pes_codigo);
                setNome(data[0].pes_nome);
                setApelido(data[0].pes_apelido);
                setSexo(data[0].pes_sexo);
                setDtaNascimento(data[0].pes_dtnascimento)
                console.log(data[0].pes_nome)

            }
        }
        IfCrud();
        getPessoas();
    }, []);

    async function handlePessoas(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        console.log("Dados Form: " + data.pes_nome);

        try {
            if (nome.length === 0) {
                alert('Insira um nome válido')
            } else {
                console.log("Codigo Pessoa: ",idPessoas)
                if (idPessoas == 0) {
                    console.log("Inclusão de Registro!")
                    await urlapi.post('pessoas', data);
                } else {
                    console.log("Alteração de Registro! ",idPessoas)
                    await urlapi.put('/pessoas/' + idPessoas, data);
                }
            }
        } catch (error) {
            alert('Erro no cadastro, tente novamente.')
        }
    }

    return (
        <div>
            <section className="sectionTable" >

                <form className="form--autor" onSubmit={handlePessoas} >

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Nome da Pessoa </label>
                            <input type="text" className="form-control"
                                name="pes_nome"
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Apelido </label>
                            <input type="text" className="form-control" name="pes_apelido"
                                id="pes_apelido"
                                value={apelido}
                                onChange={e => setApelido(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Sexo </label>
                            <input type="text" className="form-control" name="pes_sexo"
                                id="pes_sexo"
                                value={sexo}
                                onChange={e => setSexo(e.target.value)}
                            />
                        </div>
                    </div>

                    
                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Data Nascimento </label>
                            <input type="text" className="form-control" name="pes_dtanascimento"
                                id="aut_dtanascimento"
                                value={dtaNascimento}
                                onChange={e => setDtaNascimento(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="row--marks--buttons">
                        <button type="submit" className="button-save-marca">Salvar</button>
                        <Link to="/autores" className="button-return-marca" >Voltar</Link>
                    </div>
                </form>

            </section>

        </div>

    )
}
