// Exercicio 1

// function somaNumerosInseridos() {
//     let numero = Number(prompt(`Digite um numero:`))

//     let soma = 0

//     while(numero !== 0){
//         soma = soma + numero
//         numero = Number(prompt(`Digite outro numero:`))
            
//     }

//     console.log(`A soma dos numeros inseridos é: ${soma}`)
        
// }

//somaNumerosInseridos()

//Exercicio 2

// function imprimeNumerosAteNumeroEscolhido(){
//     const numeroEscolhido = Number(prompt(`Digite um numero:`))

//     for(let i = 0; i <= numeroEscolhido; i++){
//         console.log(i)
//     }
// }


// imprimeNumerosAteNumeroEscolhido()

// Exercicio 3

// const numeros = [78, -643, 0, 37, 429, 10742, 24]

// function imprimeMsgArray(array){
//     console.log(array)

//     for (let i = 0; i < array.length; i++){
//         console.log(`O elemento de indicie ${i} eh ${array[i]}.`)

//     }
// }

// imprimeMsgArray(numeros)

// Exercicios de Fixação

// function usuario(){
//     let tipoDeUsuario = prompt(`Qual tipo de usuario?`).toUpperCase()

//     while(tipoDeUsuario !== 'A'){
//         console.log(`Acesso negado`)
        
//         tipoDeUsuario = prompt(`Qual tipo de usuario?`).toUpperCase()
//     }

//     console.log(`Boas vindas admin`)
// }

// usuario()

// exercicio 2

// function calculaTabuadaDois(){
//     for (let i = 1; i <= 10; i++) {
//         const resultado = 2 * i

//         console.log(`2 x ${i} = ${resultado}`)
//     }
// }

// calculaTabuadaDois()

// exercicio 3

function arrayStrings(array){
    console.log(array)
    
    for (let i = 0; i < array.length; i++){
        const palavraMaiscula = array[i].toUpperCase()

        console.log(i, palavraMaiscula)
    }
    console.log(`Saiu do laco`)
}

const palavras = [`estojo` , `agua` , `cacto` , `gato` , `cachorra`]

arrayStrings(palavras)