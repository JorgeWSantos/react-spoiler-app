import React, { useState, useEffect } from "react";
import {Button, Card, Alert} from 'react-bootstrap'
import { getAll } from '../../services/ListarSpoilerService'
import { useHistory } from "react-router-dom";

function ListarSpoiler (props){

  const [spoilers, setSpoiler] = useState('')
  const [erro, setErro] = useState(null)
  const history = useHistory();

  useEffect(() => {

    getAll(onSuccess, onFail);

    function onSuccess(spoilers){

      spoilers.then(dados => { setSpoiler(dados)})
    }

    function onFail(erro){ setErro(erro) }

    return () => {
      // AbortController.abort();
      // console.log("unmount")
    }

  }, [])

  function exibeErro() {

    if (erro) {
      return (
        <Alert variant={"danger"}>
          Erro de conexão com o servidor
        </Alert>
      );
    }
  }

  function exibeSpoilers() {

    if (spoilers && spoilers.length) {

      return spoilers.map((item, indice) => (

        <Card key={indice} className="mt-3 mb-3">
          <Card.Header>{item.espoliador}</Card.Header>
          <Card.Body>
           <Card.Title>
              <h5 className="mt-0 mb-1">{item.titulo}</h5>
             
           </Card.Title>

           <Button variant="danger" onClick={() => history.push(`/remover/${item.id}`)} >
              Remover
           </Button>
           <Button variant="primary" onClick={() => history.push(`/editar/${item.id}`)}>
              Editar
           </Button>
          </Card.Body>
        </Card>
      ));
    } 
    else {
      return (
        <Alert variant={"light"}>
          Sem spoilers ainda. Faça spoilers não faça guerra :
        </Alert>
      );
    }
  }

  return <div>{exibeErro() || exibeSpoilers()}</div>;
}

export default ListarSpoiler;