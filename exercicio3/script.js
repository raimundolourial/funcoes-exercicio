const soma = (n1,n2)=> n1+n2
const subtracao = (n1,n2)=> n1-n2
const multiplicacao = (n1,n2)=> n1*n2
const divisao = (n1,n2)=> n1/n2

const nu1 = Number(prompt("digite o primeiro numero"))
const nu2 = Number(prompt("digite o segundo numero"))

console.log(` A soma é : ${soma(nu1, nu2)}`)
console.log(`A subtracao é: ${subtracao(nu1, nu2)}`)
console.log(`A multiplicação é: ${multiplicacao(nu1, nu2)}`)
console.log(`A divisão é : ${divisao(nu1,nu2)}`)    
