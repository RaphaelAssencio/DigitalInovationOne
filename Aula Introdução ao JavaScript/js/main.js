//
/*
AULA 1

var nome= "Raphael Assencio da Silva"
var idade= 33;
var n1= 10;
var n2= 20;
var s1="10";
var s2="20";
var frase="Eu gosto de automobilismo";

alert("Bem vindo "+nome+" você tem "+ idade+" anos.");

console.log("Numeros:"+ n1 + " | "+n2);
console.log("SOMA:");
console.log(n1+n2);

console.log("Strings:"+ s1 + " | " +s2);
console.log("CONCATENA:");
console.log(s1+s2);

console.log(frase);
console.log(frase.replace("automobilismo","aeromodelismo"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());

*/

/*
AULA 2

var lista =["maça","pera","laranja"];
var fruta ={nome:"maça", cor:"vermelha"};
var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxa"}]

console.log(lista);
console.log(lista.reverse());
console.log(lista[1])

lista.push("uva");
console.log(lista);
lista.pop();
console.log(lista);

console.log(lista.toString());
console.log(lista.join(" - "))

console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);
console.log(frutas);
console.log(frutas[1].nome);
*/

/*
AULA 3


var idade = prompt("Qual a sua idade ?");

if(idade >= 18){
    console.log("maior de idade");
}else{
    console.log("menor de idade");
};


var count=0;

while(count<=5){
    console.log(count);
    count++;
};

var d = new Date();

console.log(d.getTime());
console.log(d.getFullYear());
console.log(d.getDay());
console.log(d.getHours());
console.log(d.getMinutes());
*/

/*
AULA 4
function soma(n1,n2){
    return n1+n2;
}

function setReplace(frase,nome,novo_nome){
    return frase.replace(nome,novo_nome);
}

var validar;
function validarIdade(idade){
    if(idade>=18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

console.log(soma(5,10));
var idade = prompt("Qual sua idade ?");
console.log(validarIdade(idade));
*/

function clicou(){
    document.getElementById("agradecimento");
    document.getElementById("agradecimento").innerHTML = " Obrigado por clicar ";

}

function redirecionar(){
    window.open("https://web.digitalinnovation.one/home");

    //window.location.href = "https://web.digitalinnovation.one/home";

}

function trocar(elemento){
 //alert("Passou o mouse");
 //document.getElementById("mouseover").innerHTML = "Obrigado por passar o mouse";
 document.getElementById(elemento).innerHTML = "Obrigado por passar o mouse";
}

function trocar(elemento){
    //document.getElementById("mouseover").innerHTML = "Passe o mouse aqui";
   document.getElementById(elemento).innerHTML = "Passe o mouse aqui";
    
   }

function load(){
    console.log("INICIO");
}