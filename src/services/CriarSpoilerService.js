import {api} from './base'

export function criarSpoiler(spoiler, setRedirect, setErro){

    var url = `${api}/spoilers/create`;

    fetch(url, {
        method: "post",
        body: JSON.stringify(spoiler),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(data => {

        if (data.ok) 
            setRedirect(true);
        
        else {

            data.json().then(data => {

                if (data.error)
                    setErro(data.error)
            });
        }
    })
    .catch(erro => setErro(erro));
}
