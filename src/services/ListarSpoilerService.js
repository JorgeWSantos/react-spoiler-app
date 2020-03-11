import {api} from './base';

export function getAll(onSuccess, onFail){
   
    var url = `${api}/spoilers/getall`;

    fetch(url)
    .then(res => {

        if (res.status===200)
            onSuccess(res.json())
    })
    .catch(erro => {
        onFail(erro)
    })
}