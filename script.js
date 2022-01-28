//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
let idade=16
if(idade>18){
    console.log("voce tem mais que 18 anos")
}else{
    console.log("voce nao e maior de idade")
}
//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true
let humano=true
if(idade>=18 && humano==true){
    console.log("eu sou maior de idade e sou humano")
}else{
    console.log("nao sou humano")
}
//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro
let aniversario="Fevereiro"
if(aniversario=="Janeiro" || aniversario=="Dezembro"){
    console.log("voce faz aniversario em Janeiro ou Dezembro")
}else{
    console.log("voce nao faz aniversario em Janeiro ou Dezembro")
}
//*** Exercícios bônus
//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R
let nome="Maria"
if(nome.substring(0,1)=="R" || nome.substring(0,1)=="r"){
    console.log("seu nome comeca com a letra R")
}else{
    console.log("seu nome nao comeca com a letra R")
}
//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E
let sobrenome="Andrade"
if(sobrenome.length>6 || nome.substring(0,1)=="E"){
    console.log("seu sobrenome tem mais de 6 letras ou seu nome comeca com a letra E")
}else{
    console.log("seu sobrenome nao tem mais de 6 letras e o seu nome nao comeca com E")
}