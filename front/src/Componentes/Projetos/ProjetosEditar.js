import React from "react"
import './ProjetosEditar.css';
import urlapi from "../../services/api.js"
import { useEffect, useState } from 'react';
import { useParams, Link} from "react-router-dom";
export default function ProjetosEditar() {
    let idBoolean = false;        // edição

    const [codigo, setCodigo] = useState(0);

    const [tipo, setTipo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [iniciativa, setIniciativa] = useState('');
    const [dtinicio, setDtinicio] = useState('');
    const [pesCodigo, setPesCodigo] = useState('');

    const [checked, setChecked] = useState(false);

    const { idProjetos } = useParams();

    function IfCrud() {

        console.log('IdProjeto: ' + idProjetos + ' - ' + idBoolean)
        if (idProjetos === 0) {
            idBoolean = true;
        } else {

        }

    }

    useEffect(() => {
        async function getProjetos() {
            console.log('Projeto: ' + idProjetos + ' - ' + idBoolean)
            if (idProjetos == 0) {
                setChecked(true);
                console.log('Inclusão de novo registro!')
            } else {

                const { data } = await urlapi.get('/projetos/' + idProjetos);
                console.log(data)

                setCodigo(data[0].prj_codigo);

                setTipo(data[0].prj_tipo);
                setDescricao(data[0].prj_descricao);
                setIniciativa(data[0].prj_iniciativa);
                setDtinicio(data[0].prj_iniciativa);
                setPesCodigo(data[0].pes_codigo);

                console.log(data[0].prj_tipo)

            }
        }
        IfCrud();
        getProjetos();
    }, []);


    async function handleProjetos(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        console.log("Dados Form: " + data.prj_tipo);

        try {
            if (tipo.length === 0) {
                alert('Insira um Projeto válido')
            } else {
                console.log("Codigo Projeto: ",idProjetos)
                if (idProjetos == 0) {
                    console.log("Inclusão de Registro!")
                    await urlapi.post('projetos', data);
                } else {
                    console.log("Alteração de Registro! ",idProjetos)
                    await urlapi.put('/projetos/' + idProjetos, data);
                }

            }
        } catch (error) {
            alert('Erro no cadastro, tente novamente.')
        }
    }

    return (
        <div>
            <section className="sectionTable" >

                <form className="form--autor" onSubmit={handleProjetos} >


                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Tipo do Projeto </label>
                            <input type="text" className="form-control"
                                name="prj_tipo"
                                value={tipo}
                                onChange={e => setTipo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Descrição </label>
                            <input type="text" className="form-control" name="prj_descricao"
                                id="prj_descricao"
                                value={descricao}
                                onChange={e => setDescricao(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Iniciativa </label>
                            <input type="text" className="form-control" name="prj_iniciativa"
                                id="prj_iniciativa"
                                value={iniciativa}
                                onChange={e => setIniciativa(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Data do Inicio </label>
                            <input type="text" className="form-control" name="prj_dtinicio"
                                id="prj_dtinicio"
                                value={dtinicio}
                                onChange={e => setDtinicio(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Codigo da Pessoa </label>
                            <input type="number" className="form-control" name="pes_codigo"
                                id="pes_codigo"
                                value={pesCodigo}
                                onChange={e => setPesCodigo(e.target.value)}
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
