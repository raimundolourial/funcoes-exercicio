//a)
function somaNumeros(n1,n2){
    console.log('a soma dos numeros: '+(n1+n2))
}

const numeroUm = Number(prompt("digite o primeiro numero"))
const numeroDois = Number(prompt("digite o segundo numero"))

somaNumeros(numeroUm, numeroDois)

//b)

function testaNumeros(n1,n2){
    const test = n1>=n2

    console.log("O primeiro numero é maior que o segundo? " + test)
}
const nUm= Number(prompt("digite o primeiro numero"))
const nDois = Number(prompt("digite o segundo numero"))

testaNumeros(nUm,nDois)

//c) 

function ePar(n1){
    console.log(`O numero ${n1} é Par? ${(n1%2)===0}`)
}
const parImpar = Number(prompt("Digite um numero"))

ePar(parImpar)

//d)

function calculaSalario(sal){
    console.log(`O salário liquido é: ${sal - (sal*0.10)}`)
}

const salBruto = Number(prompt("Digite o salario bruto "))
calculaSalario(salBruto)
