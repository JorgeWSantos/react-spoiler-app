import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { criarSpoiler } from "../../services/CriarSpoilerService";

function CriarSpoiler(props){

  const [spoiler, setSpoiler] = 
    useState({
      espoliador: "",
      descricao: "",
      titulo: ""
    })
  const [erro, setErro] = useState(null)
  const [redirect, setRedirect] = useState(false)

  function exibeErro() {

    if (erro) {
      return (
        <div className="alert alert-danger" role="alert">
          Erro de conexão com o servidor
        </div>
      );
    }
  }

  if (redirect) {

    return <Redirect to="/" />;
  }

  else {

    return (
      <form onSubmit={handleSubmit}>
        {exibeErro()}

        <fieldset>
          <legend>Criar Spoiler</legend>
          <div className="form-group">
            <label htmlFor="espoliador">Espoliador</label>
            <input
              type="text"
              className="form-control"
              id="espoliador"
              name="espoliador"
              placeholder="zededeus"
              minLength="2"
              maxLength="40"
              value={spoiler.espoliador}
              onChange={(change) => handleInputChange(change)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="titulo">Título</label>
            <input
              type="text"
              className="form-control"
              id="titulo"
              name="titulo"
              aria-describedby="tituloAjuda"
              placeholder="Hereditário"
              minLength="2"
              maxLength="255"
              value={spoiler.titulo}
              onChange={handleInputChange}
            />
            <small id="tituloAjuda" className="form-text text-muted">
              Um título pode ser um filme, série, livro...
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="descricao">Descrição</label>
            <textarea
              className="form-control"
              id="descricao"
              name="descricao"
              placeholder="Charlie é Paimon"
              minLength="2"
              maxLength="255"
              value={spoiler.descricao}
              onChange={(change) => handleInputChange(change)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </fieldset>
      </form>
    );
  }

  function handleInputChange(event){

    const input = event.target;
    const name = input.name;
    const value = input.value;
    var nArray = JSON.parse(JSON.stringify(spoiler));

    nArray[name] = value

    setSpoiler(nArray)
  };

  function handleSubmit(event){

    criarSpoiler(spoiler, setRedirect, setErro);

    event.preventDefault();
  };
}

export default CriarSpoiler;