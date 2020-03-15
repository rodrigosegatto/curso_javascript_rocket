//Referenciando os elementos
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

//Relembrando: [] = Array. {} Objetos (Que podem estar dentro de arrays)
var to_do_list = [
    'Fazer Café',
    'Estudar Javascritp',
    'Acessar comunidade da Rocketseat'
];

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

}

//deleta o item da lista na posição passada por parametro
function deleteToDo(pos){
    //Slice adiciona ou remove elementos em uma posição do array
    to_do_list.splice(pos,1);

    renderToDo();
}

//Neste caso, para executar a função não precisa os ()
buttonElement.onclick = addToDo;