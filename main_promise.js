//USANDO PROMISES PARA TRABALHAR DE FORMA ASSÍNCRONA.
var mainPromise = function (){
    return new Promise(function(resolve,reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET','https://api.github.com/users/rodrigosegatto');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    //Resolve é o retorno de sucesso da Promise
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    //Reject é o retorno de erro na requisição
                    reject('Erro na requisição');
                }
            }
        }
    });
}

mainPromise()
    //Sucesso no retorno da requisição, chamado pelo "resolve"
    .then(function(response){
        console.log(response);
    })
    //Erro no retorno da requisição, chamado pelo "reject"
    .catch(function(error){
        console.warn('Erro na requisição');
    });