// Exercícios de interpretação
// 1.
// A função conversorDeMoeda recebe um argumento number
// e converte esse valor para moeda Real utilizando uma
// informação pelo usuário através do console então retorna uma string.

// 2.
// A função investeDinheiro recebe um Number valor que sera
// multiplicado por uma taxa determinada a ser selecionada pela
// string tipoDeInvestimento,  primeiro parâmetro da função
// Caso o tipoDeInvestimento seja inválido, mostra um alert
// retorna um Number.
// Respostas do console:
// undefined (com um alert "TIPO DE INVESTIMENTO INFORMADO INCORRETO!")

// 3.
// O código copia no array1 os elementos pares do array numeros e elementos impares no array2
// Respostas do console:
// Quantidade total de números 14

// 4.
// Esse código procura o menor e maior item do array 
// Respostas do console:
// -10
// 283

// Exercícios de Logica de Programação

//1Cite 3 maneiras de se percorrer/iterar uma lista. Faça um programa para exemplificar.
console.log(`Exercício de Lógica de Programação 1`)
const array1 = [1, 2, 3]
function Exercicio1(arr){
    // for-of imprindo tudo do array
    for(let num of arr){
        console.log(num)
    }
    // while imprimindo tudo
    let i = 0
    while(i < arr.length){
        console.log(`O valor do array no índice ${i} é: ${array1[i]}`)
        i++
    }
    //somando todos os itens
    let soma = 0
    arr.forEach((item, idx, arr) => {
        soma += item
    })
    console.log(`A soma do array é ${soma}`)
}
Exercicio1(array1)

// 2.
// a) false
// b) false
// c) true
// d) true
// e) true

// 3.
// Faltou (i); na comparação não vai o =
console.log(`Exercício de Lógica de Programação 3 - N = 3`)
function quantidadeDeNumerosPares(N){
    for(let i = 0; i < N; i++){
        console.log(i*2)
    }
}
//4.
console.log(`Exercício  4 - Triângulo 1 2 1`)
function Triangulo(a, b, c){
    if(a === b && b === c){
        console.log('Equilátero')
    }else
    if(a === b || a === c || b === c){
        console.log('Isósceles')
    }else{
        console.log('Escaleno')
    }
}
Triangulo(1, 2, 1)

//5.
console.log(`Exercício  5`)
function Divisivel(a, b){
    console.log(`ENTRADA:`)
    console.log(`${a} e ${b}`)
    console.log(`SAÍDA:`)
    if(a > b){
        console.log(`O maior é: ${a}`)
    }else
    if(b > a){
        console.log(`O maior é: ${b}`)
    }
    else{console.log('São iguais!')}

    if(a % b === 0){
        console.log(`${a} é divisível por ${b}`)
    }else{console.log(`${a} não é divisível por ${b}`)}
    if(b % a === 0){
        console.log(`${b} é divisível por ${a}`)
    }else{console.log(`${b} não é divisível por ${a}`)}

    console.log(`A diferença entre eles é ${Math.abs(a - b)}`)
}
Divisivel(15, 30)

// Exercícios de Funções
//1.
console.log(`Exercício de Funções 1`)
let arr2 = [1, 1, 3, 5, 7, 9, 9, 8, 6, 4, 2]
console.log(arr2)
function MaiorMenor(arr){
    const arrayOrdenado = Array.from(new Set(arr)).sort((a, b) => a - b)
    console.log(`O segundo maior é ${arrayOrdenado[arrayOrdenado.length - 2]} o segundo menor é ${arrayOrdenado[1]}`)
}
MaiorMenor(arr2)

//2.
// Exercício de Funções 2
let anon = function(){
    alert('Hello LaBenu =]')
}
anon()

// Exercícios de Objetos
// 1.
// array: é uma coleção de objetos organizados como em uma linha, 
// usado quando queremos armazenar informações que estão de alguma 
// forma relacionadas.
// objeto: é um item que pode conter diversos valores dentro,
// de maneira a representar com mais clareza as informações,
// por exemplo, um objeto cadastro pode contar valores como nome,
// telefone e endereço

//2.
console.log(`Exercício de Objetos 2 - retangulo 3 4`)
function criaRetangulo(lado1, lado2){
    const retangulo = {
        largura: lado1,
        altura: lado2,
        perimetro: (2 * (lado1 + lado2)),
        area: (lado1 * lado2),
    }
    return retangulo
}
console.log(criaRetangulo(3, 4))

//3.
console.log(`Exercício 3 - Filme`)
const panteraNegra = {
    titulo: 'Pantera Negra',
    ano: '2018',
    diretor: 'Ryan Coogler',
    cast: ['Chadwick Boseman', 'Danai Gurira', 'Forest Whitaker'],

    imprimir: function(){
        console.log(`Venha assistir ao filme ${this.titulo}, de ${this.ano}, dirigido por ${this.diretor} e estrelado por ${this.cast.join(', ')}.`)
    }
}
panteraNegra.imprimir()

//4
console.log(`Exercício 4 - Anonimizar`)
const conhecido = {
    nome: 'Rui',
    idade: 33,
    email: 'Rui@oab.br',
    endereco: 'Rua, 13'
}
function anonimizar(pessoa){
    let anonimo = {
        ...pessoa,
        nome: 'ANÔNIMO'
    }
    return anonimo
}
console.log(anonimizar(conhecido))
console.log(conhecido)


// Exercícios de Funções de array
//1-A)
array3 = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]

console.log(`Exercícios de Funções de Array - 1.a)`)
function retornaAdultos(arr){
    return arr.filter( pessoa => pessoa.idade >= 20 )
}      // Coloquei tudo em uma linha
console.log(retornaAdultos(array3))

//1-B)
console.log(`Exercícios de Funções de Array - 1.b)`)
function retornaCriancas(arr){
    return arr.filter( pessoa => pessoa.idade < 20 )
}
console.log(retornaCriancas(array3))

// 2
//2-A)
const array4 = [1, 2, 3, 4, 5, 6]
console.log(`Exercícios de Funções de Array - 2.a)`)
function multiplicaPor2(arr){
    return arr.map( num => {return num * 2} )
}
console.log(multiplicaPor2(array4))

//2-B)
console.log(`Exercícios de Funções de Array - 2.b)`)
function multiplicaPor3String(arr){
    return arr.map( num => {return `${num * 3}`} )
}
console.log(multiplicaPor3String(array4))

//2-C)
console.log(`Exercícios de Funções de Array - 2.c)`)
function Par(arr){
    return arr.map( num => {
        if(num % 2 === 0){
            return `${num} é par`
        }
        return `${num} é impar`
    })
}
console.log(Par(array4))

//3
const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]
//3-A)
console.log(`Exercícios de Funções de Array - 3.a)`)
function podeEntrar(arr){
    return arr.filter( pessoa  => pessoa.idade >= 14 && pessoa.idade <= 60 && pessoa.altura >= 1.5 )
}
console.log(podeEntrar(pessoas))
//3-B)
console.log(`Exercícios de Funções de Array - 3.b)`)
function naoPodeEntrar(arr){
    return arr.filter( pessoa => pessoa.idade < 14 || pessoa.idade > 60 || pessoa.altura < 1.5 )
}
console.log(naoPodeEntrar(pessoas))

//4
console.log(`Exercícios de Funções de Array - 4`)
const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

function criarEmails(arr){
    let Sr, Lembra
    return arr.map( consulta => {
        if(consulta.genero === 'masculino'){
            Sr = 'Sr.'; Lembra = 'lembrá-lo'
        }else{
            Sr = 'Sra.'; Lembra = 'lembrá-la'
        }

        if(!consulta.cancelada){
            return `Olá, ${Sr} ${consulta.nome}. Estamos enviando esta mensagem para ${Lembra} da sua consulta no dia ${consulta.dataDaConsulta}. Por favor acuse o recebimento deste e-mail`
        }
        return `Olá, ${Sr} ${consulta.nome}. Infelizmente, sua consulta marcada para o dia ${consulta.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`
    })
}
console.log(criarEmails(consultas))

//Sr = string 
// Lembra = String

//5
console.log(`Exercícios de Funções de Array - 5`)
const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function Saldo(arr){
    arr.forEach( conta => conta.saldoT -= conta.compras.reduce((a, b) =>  a + b, 0) )
}
Saldo(contas)
console.log(contas)
