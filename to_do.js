//Referenciando os elementos
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

//Relembrando: [] = Array. {} Objetos (Que podem estar dentro de arrays)
/* Comentando, pois isto foi substituido pelo localStorage abaixo
var to_do_list = [
    'Fazer Café',
    'Estudar Javascritp',
    'Acessar comunidade da Rocketseat'
];
*/

//Recupera lista do localStorage
//Antes usa JSON.parse para converter a string JSON em valor ou objeto JavaScript
//Ou array vazio (|| []) caso seja excluido indevidamente o localStorage (evitar erros de JS) 
var to_do_list = JSON.parse(localStorage.getItem('list_to_do')) || [];

//Função para renderizar a lista de tarefas em tela
function renderToDo(){
    //Remover todo o conteúdo dentro da lista <ul>
    listElement.innerHTML = '';

    //Percorre array e insere os itens na lista
    for (item of to_do_list){
        //Criando Elemento e Texto do Elemento
        var itemElement = document.createElement('li');
        var itemText = document.createTextNode(item);
        
        //Criação do link Excluir
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href','#');
        var linkText = document.createTextNode('Excluir');
        
        //Armazena em "pos" a posição do item no array
        var pos = to_do_list.indexOf(item);
        //Adiciona atributo no link Excluir que chamará função de deletar
        linkElement.setAttribute('onclick','deleteToDo('+pos+')');

        //Inserindo texto excluir dentro do <a>
        linkElement.appendChild(linkText);
        //Inserindo texto no <li>
        itemElement.appendChild(itemText);
        //INserindo o <a> dentro do <li>
        itemElement.appendChild(linkElement);
        //INserindo <li> na lista <ul>
        listElement.appendChild(itemElement);
    }
}

renderToDo();

function addToDo(){
    var toDoText = inputElement.value;

    //Push insere no final do array local
    to_do_list.push(toDoText);

    inputElement.value = '';
    renderToDo();
    saveToStorage();
}

//deleta o item da lista na posição passada por parametro
function deleteToDo(pos){
    //Slice adiciona ou remove elementos em uma posição do array
    to_do_list.splice(pos,1);

    renderToDo();
    saveToStorage();
}

//Salvar no localStorage
//Uma funcionalidade que permite armazenar informações no browser
//Mantém o dado gravado mesmo após fechar e abrir o navegador novamente
//Ler: https://tableless.com.br/guia-f%C3%A1cil-sobre-usar-localstorage-com-javascript/
function saveToStorage(){
    //Antes converter para JSON, pois o localStorage só permite strings
    localStorage.setItem('list_to_do',JSON.stringify(to_do_list));
}

//Neste caso, para executar a função não precisa os ()
buttonElement.onclick = addToDo;