/*
Crie uma tela com um <input> que deve receber o nome 
de um usuário no Github. Após digitar o nome do usuário 
e clicar no botão buscar a aplicação deve buscar pela 
API do Github (conforme URL abaixo) os dados de 
repositórios do usuário e mostrá-los em tela:
URL de exemplo: https://api.github.com/users/diego3g/repos
Basta alterar "diego3g" pelo nome do usuário
*/

var buttonElement = document.querySelector("#app button");

function getDataUser(usuario){
    axios.get('https://api.github.com/users/'+usuario)
        .then(function(response){
            printListData(response);
        })
        .catch(function(error){
            console.warn(error);
        });
}

function printListData(data){
    console.log(data.data.login);
    console.log(data.data.id);
    console.log(data.data.avatar);

    var itemElement = document.querySelector("#app ul");
    //Remover todo o conteúdo dentro da lista <ul>
    itemElement.innerHTML = '';

    var listElement_1 = document.createElement('li');
    var textElement_1 = document.createTextNode("Login: "+data.data.login);
    listElement_1.appendChild(textElement_1);

    var listElement_2 = document.createElement('li');
    var textElement_2 = document.createTextNode("ID: "+data.data.id);
    listElement_2.appendChild(textElement_2);

    var listElement_3 = document.createElement('li');
    var textElement_3 = document.createTextNode("Avatar: "+data.data.avatar);
    listElement_3.appendChild(textElement_3);

    itemElement.appendChild(listElement_1);
    itemElement.appendChild(listElement_2);
    itemElement.appendChild(listElement_3);

}

buttonElement.onclick = function(){
    var inputElement = document.querySelector("#app input");
    getDataUser(inputElement.value);
}