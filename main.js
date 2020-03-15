//UTILIZAÇÃO AJAX (BÁSICO)

//Utilizar este objeto (AJAX) sempre que for fazer requisições
//entre ClientexServidor e vice-versa
//Ler mais: https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHTTPRequest
var xhr = new XMLHttpRequest();

//Abre requisição e envia
xhr.open('GET','https://api.github.com/users/rodrigosegatto');
xhr.send(null);

//Para consultar as requisições, acessar o console do Chrome, Network

//Para Saber quando a requisição terminou
xhr.onreadystatechange = function(){
    //Ler: https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHttpRequest/readyState
    if(xhr.readyState === 4){ //Significa que a requisição retornou OK
        console.log(JSON.parse(xhr.responseText));
    }
}


