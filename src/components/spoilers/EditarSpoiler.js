import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import {Alert} from 'react-bootstrap'
import {getOne, editSpoiler} from '../../services/EditarSpoilerService'


export default function EditarSpoiler(props){

  const [spoiler, setSpoiler] = useState({
                                  espoliador: "",
                                  descricao: "",
                                  titulo: ""
                                })
  const [erro, setErro] = useState(null)
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {

    const {id} = props.match.params;
    getOne(id, setSpoiler, setErro)

    return () => {
      console.log("willunmount edit")
    }
  }, [props.match.params])

  function exibeErro() {

    if (erro) {
      return (
        <Alert variant={"danger"}>
          Erro de conexão com o servidor
        </Alert>
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
          <legend>Editar Spoiler</legend>
          <div className="form-group">
            <label htmlFor="espoliador">Espoliador</label>
            <input
              type="text"
              className="form-control-plaintext"
              id="espoliador"
              name="espoliador"
              placeholder="zededeus"
              minLength="2"
              maxLength="40"
              value={spoiler.espoliador}
              onChange={(event) => handleInputChange(event)}
              disabled
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
              onChange={(event) => handleInputChange(event)}
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
              onChange={(event) => handleInputChange(event)}
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

    editSpoiler(spoiler, setRedirect, setErro);

    event.preventDefault();
  };
}
