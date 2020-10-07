//EXERCICIO 1
//RESPOSTA
    // a) 10
    //    50
    // b) não seria impresso nada no console

//EXERCICIO 2
//RESPOSTA:
    // a) sera impresso "Darvas" depois "Caio"
    // b) "Amanda" e "Caio"

//EXERCICIO 3
//RESPOTA:
//a)ele recebe um array, e retorna um novo array(par) nos [](quadrados)
//b)nome melhor para função : NumerosParaArray

// >>> Exercícios de escrita de código <<<
//EXERCICIO 4
//RESPOSTA:
    // a)
    //  function mensagem(){
    //      console.log("Eu sou Vitor de Farias METZNER, tenho 22 anos, moro em Florianópolsi e sou estudante.")
    //  }
    //  mensagem()


// b)
    // function mensagem(nome, idade, cidade, ondeestuda){
    //     let resp  = "não sou" 
    //     if(ondeestuda){
    //         resp = "sou"
    //     }

    //     return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${resp} estudante.`
    // }

    // console.log(mensagem("Vitor de Farias Metzner", 22, "Florianopolis", false))
    
//EXERCICO 5
//RESPOSTA:
// a)
    // function somando(num1, num2){
    //     return num1 + num2
    // }
    // console.log(somando(2,2))

// b)
    // function verificar(number1, number2){
    //     if(number1 >= number2){
    //         return `${number1} maior ou igual ${number2}? ${true}`
    //     } else {
    //         return `${number1} maior ou igual ${number2}? ${false}`
    //     } 
    // }

// c)
    // function repetiMensagem(mensagem){
    //     for(let i = 0; i < 10; i++ ){
    //         console.log(mensagem)
    //     }
    // }
    // repetiMensagem("OIEEEEEEEEEEEEEEEEEEEEE")

    //EXERCICO 6
//RESPOSTA:
//const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// a)
    // const numerosArray= (array) => {
    //     return array.length
    // }
    // console.log(numerosArray(array)) 

    // b)
    // const verificarPar = (num) => {
    //     if(num % 2 === 0){
    //         return true
    //     } else {
    //         return false
    //     }
    // }
    // console.log(verificarPar(3))

    // c)
    // const numerosPares = (array) => {
    //     let contador = 0 
    //     for(let item of array){
    //         if(item % 2 === 0){
    //             contador++
    //         }
    //     }
    //     return contador
    // }
    // console.log(numperosPares(array))

    
// d)
    // const numerosPares = (array) => {
    //     let contador = 0 

    //     for(let item of array){
    //        if(verificarPar(item)){
    //            contador++
    //        }
    //     }

    //     return contador
    // }
    // console.log(numerosPares(array))

    //EXERCICO 1
//RESPOSTA:
    // const funcao1 = (numero) => {
    //     console.log(numero)
    // }

    // const funcao2 = (num1, num2) => {
    //     funcao1(num1+num2)
    // }

    // funcao2(2,1)

    // a)
    // const parDouble = (array) => {
    //     let novoArray = []

    //     for(let item of array){
    //         if(item % 2 === 0){
    //             novoArray.push(item*2)
    //         }
    //     }

    //     return novoArray
    // }

    // console.log(parDouble(numeros))

    // b)
    // const maiorArray = (array) => {
    //     let maiorArray = array[0]

    //     for(let item of array){
    //         if(item > maiorArray){
    //             maiorArray = item
    //         }
    //     }
    //     return maior
    // }
        // console.log(maiorArray(numeros))

        // c)
    // const maiorNumeroArray = (array) => {
    //     let maior = array[0]
    //     let indice = 0

    //     for(let i = 0; i < array.length; i++){
    //         if(array[i] > maior){
    //             maior = array[i]
    //             indice = i
    //         }
    //     }
    //     return indice
    // }

    // console.log(maiorNumeroArray(numeros))


// d)
    // const arrayInverso = (array) => {
    //     let inverso = []

    //     for(let i = array.length-1; i >= 0; i--) {
    //         inverso.push(array[i])
    //     }

    //     return inverso
    // }
    // console.log(arrayInverso(numeros))









