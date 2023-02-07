//a)

function imprimeNome(nome){
    console.log("Olá, " + nome )
    
}
const n = prompt("Digite seu nome")
imprimeNome(n)
//b)

function tabuada(num){
    console.log(`tabuada de ${num}: 
    1 x ${num} = ${num*1} 
    2 x ${num} = ${num*2} 
    3 x ${num} = ${num*3} 
    4 x ${num} = ${num*4} 
    5 x ${num} = ${num*5} 
    6 x ${num} = ${num*6} 
    7 x ${num} = ${num*7} 
    8 x ${num} = ${num*8} 
    9 x ${num} = ${num*9} 
   10 x ${num} = ${num*10}`)      
}

const pegaNumero = Number(prompt("Digite um numero para calcular Tabuada"))

tabuada(pegaNumero)

//c)

console.log("usando arrow fuction agora")

const ola = (nome)=> console.log(`Olá ${nome}`)
ola(prompt(`Digite seu Nome`))


const tabuadade10 = (num)=>{
    console.log(`tabuada de ${num}: 
    1 x ${num} = ${num*1} 
    2 x ${num} = ${num*2} 
    3 x ${num} = ${num*3} 
    4 x ${num} = ${num*4} 
    5 x ${num} = ${num*5} 
    6 x ${num} = ${num*6} 
    7 x ${num} = ${num*7} 
    8 x ${num} = ${num*8} 
    9 x ${num} = ${num*9} 
   10 x ${num} = ${num*10}`)  
}

tabuadade10(Number(prompt(`Digite um numero para calcular Tabuada`)))