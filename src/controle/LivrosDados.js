import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ControleLivro from './ControleLivros';
import ControleEditora from './ControleEditora';
import './LivroDados.css';

const controleLivro = new ControleLivro(); 
const controleEditora = new ControleEditora(); 

const LivroDados = () => {
    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const [codEditora, setCodEditora] = useState(0);
    const navigate = useNavigate();

    const opcoes = controleEditora.getEditoras().map(editora => ({
        value: editora.codEditora,
        text: editora.nome
    }));

    const tratarCombo = (event) => {
        setCodEditora(Number(event.target.value));
    };

    const incluir = (event) => {
        event.preventDefault();
        const livro = {
            codigo: 0,
            titulo,
            resumo,
            autores: autores.split('\n'),
            codEditora
        };
        controleLivro.incluir(livro);
        navigate('/');
    };

    return (
      <main>
        <h1>Inclusão de Livro</h1>
        <form onSubmit={incluir}>
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="titulo">Título:</label>
              <input
                type="text"
                id="titulo"
                className="form-control"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </div>
            <div className="form-column">
              <label htmlFor="codEditora">Editora:</label>
              <select
                id="codEditora"
                className="form-control"
                value={codEditora}
                onChange={tratarCombo}
              >
                {opcoes.map(op => (
                  <option key={op.value} value={op.value}>
                    {op.text}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-column">
              <label htmlFor="resumo">Resumo:</label>
              <textarea
                id="resumo"
                className="form-control"
                value={resumo}
                onChange={(e) => setResumo(e.target.value)}
              ></textarea>
            </div>
            <div className="form-column">
              <label htmlFor="autores">Autores (um por linha):</label>
              <textarea
                id="autores"
                className="form-control"
                value={autores}
                onChange={(e) => setAutores(e.target.value)}
              ></textarea>
            </div>
          </div>

          <button type="submit" className="btn btn-primary mt-3">
            Incluir
          </button>
        </form>
      </main>
    );
};

export default LivroDados;
