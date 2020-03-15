//USANDO AXIOS.
//Um encapsulamento do XMLHttpRequest. 
//Vai nos ajudar a obter os valores mais facilmente

// Métodos [GET], [POST], [PUT], etc...
// Todas as linhas utilizadas com Promise nativo foram reduzidas a estas abaixo
axios.get('https://api.github.com/users/rodrigosegatto')
    //Sucesso no retorno da requisição, chamado pelo "resolve"
    .then(function(response){
        console.log(response.data.avatar_url);
    })
    //Erro no retorno da requisição, chamado pelo "reject"
    .catch(function(error){
        console.warn(error);
    });