import {api} from './base';

export function getOne(id, onSuccess, onFail){
   
    var url = `${api}/spoilers/getone/${id}`
    fetch(url)
    .then(data => {

        data.json().then(data => {

            if (data.error)
                onFail(data.erro)
            
            else
                onSuccess(data)
        });
    })
    .catch(erro => onFail(erro));

}


export function editSpoiler(spoiler, onSuccess, onFail){
   
    const body = JSON.stringify(spoiler)
    var url = `${api}/spoilers/put/${spoiler.id}`

    fetch(url, {
      method: "put",
      body: body,
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(data => {

      if (data.ok)
        onSuccess(true)

      else {

          data.json().then(data => {

            if (data.error) 
                onFail(data.error)
          });
      }
    })
    .catch(erro => onFail(erro));

}