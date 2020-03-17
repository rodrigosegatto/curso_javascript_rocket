/*
Crie uma função que recebe a idade de um usuário e 
retorna uma Promise que depois de 2 segundos 
retornará se usuário é maior ou não que 18 anos. 
Se o usuário ter mais que 18 anos de idade o 
resultado deve cair no .then, caso contrário, no .catch
*/

var checkIdade = function (idade){
    return new Promise(function(resolve,reject){
        setInterval(function(){
            if(idade>18){
                resolve(true);
            }else{
                reject(false);
            }
        },2000);
    });
}

checkIdade(20)
    .then(function(resolve){
        console.log("Maior que 18 anos!");
    })
    .catch(function(reject){
        console.warn("Menor que 18 anos!");
    });
