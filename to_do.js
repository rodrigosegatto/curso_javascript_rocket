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

    for (item of to_do_list){
        //Criando Elemento e Texto do Elemento
        var itemElement = document.createElement('li');
        var itemText = document.createTextNode(item);

        //Inserindo texto no <li> e <li> na lista <ul>
        itemElement.appendChild(itemText);
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

//Neste caso, para executar a função não precisa os ()
buttonElement.onclick = addToDo;