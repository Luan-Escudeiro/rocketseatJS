//Functions
function calcSum(num1,num2){
let num3=num1+num2
return num3
}

let aux=5
let aux2=7

console.log(calcSum(aux,aux2))

let nome="Luan"
var num= nome.length

console.log(num)

let phrase ="Que calor meu amigo."
let arrayAux = phrase.split(" ")

console.log(arrayAux)

let frase2 =arrayAux.join(" ")
console.log(frase2)

let techs=["html","css","JavaScript"]
console.log(techs)
techs.push("Python") //Adiciona no fim
console.log(techs)
techs.unshift("Sql") //Adiciona no começo
console.log(techs)
techs.pop() //Remove do fim
techs.shift()//Remove do começo
techs.slice(1,4) //Retorna o intervalo informado
console.log(techs.slice(1,2))
techs.splice(1)//Remove pelo index
techs.indexOf('css')//Informa a posição no array
