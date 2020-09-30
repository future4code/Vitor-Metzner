const nome = prompt('Nome Completo')
const tipo = prompt('Qual o tipo de jogo? IN: Internacional / DO: Domésticos').toUpperCase()
const etapa = prompt('Qual a etapa do jogo? SF: Semi-final / DT: Decisão de terceiro / FI: Final').toUpperCase()
const categoria = Number(prompt('Qual a categoria? 1 / 2 / 3 / 4'))
const quantidadeDeIngressos = Number(prompt('Quantos ingressos?'))

const RAZAO_DOLAR_REAL = 5.63
const precoEmRealDasSemiFinais = [1320, 880, 550, 220]
const precoEmRealDaDisputaDeTerceiro = [660, 440, 330, 170]
const precoEmRealDasFinais = [1980, 1320, 880, 330]

let mensagemTipo = 'Tipo do jogo: ' 
let mensagemEtapa = 'Etapa do jogo: '
let mensagemPrecoUnitario = 'Valor do ingresso: '
let mensagemValorTotal = 'Valor total: '
let moeda
let precoUnitarioEmReal
let precoUnitarioEmDolar
let valorTotal

switch (tipo) {
  case 'IN':
    mensagemTipo += 'Internacional'
    moeda = 'U$ '

    switch (etapa) {
      case 'SF':
        mensagemEtapa += 'Semi-final'
        precoUnitarioEmReal = precoEmRealDasSemiFinais[categoria - 1]
        precoUnitarioEmDolar = precoUnitarioEmReal / RAZAO_DOLAR_REAL
        valorTotal = precoUnitarioEmDolar * quantidadeDeIngressos
        mensagemPrecoUnitario += moeda + precoUnitarioEmDolar
        mensagemValorTotal += moeda + valorTotal
        break
      case 'DT':
        mensagemEtapa += 'Decisão de terceiro colocado'
        precoUnitarioEmReal = precoEmRealDaDisputaDeTerceiro[categoria - 1]
        precoUnitarioEmDolar = precoUnitarioEmReal / RAZAO_DOLAR_REAL
        valorTotal = precoUnitarioEmDolar * quantidadeDeIngressos
        mensagemPrecoUnitario += moeda + precoUnitarioEmDolar
        mensagemValorTotal += moeda + valorTotal
        break
      case 'FI':
        mensagemEtapa += 'Final'
        precoUnitarioEmReal = precoEmRealDasFinais[categoria - 1]
        precoUnitarioEmDolar = precoUnitarioEmReal / RAZAO_DOLAR_REAL
        valorTotal = precoUnitarioEmDolar * quantidadeDeIngressos
        mensagemPrecoUnitario += moeda + precoUnitarioEmDolar
        mensagemValorTotal += moeda + valorTotal
        break
      default:
        console.log('Etapa de jogo inválida')
        break
    }
    
    break
  case 'DO':
    mensagemTipo += 'Nacional'
    moeda = 'R$ '

    switch (etapa) {
      case 'SF':
        mensagemEtapa += 'Semi-final'
        precoUnitarioEmReal = precoEmRealDasSemiFinais[categoria - 1]
        valorTotal = precoUnitarioEmReal * quantidadeDeIngressos
        mensagemPrecoUnitario += moeda + precoUnitarioEmReal
        mensagemValorTotal += moeda + valorTotal
        break
      case 'DT':
        mensagemEtapa += 'Decisão de terceiro colocado'
        precoUnitarioEmReal = precoEmRealDaDisputaDeTerceiro[categoria - 1]
        valorTotal = precoUnitarioEmReal * quantidadeDeIngressos
        mensagemPrecoUnitario += moeda + precoUnitarioEmReal
        mensagemValorTotal += moeda + valorTotal
        break
      case 'FI':
        mensagemEtapa += 'Final'
        precoUnitarioEmReal = precoEmRealDasFinais[categoria - 1]
        valorTotal = precoUnitarioEmReal * quantidadeDeIngressos
        mensagemPrecoUnitario += moeda + precoUnitarioEmReal
        mensagemValorTotal += moeda + valorTotal
        break
      default:
        console.log('Etapa de jogo inválida')
        break
    }

    break
  default:
    console.log('Tipo de jogo inválido')
    break
}

console.log('---Dados da compra---')
console.log('Nome do cliente:', nome)
console.log(mensagemTipo)
console.log(mensagemEtapa)
console.log('Categoria:', categoria)
console.log('Quantidade de ingressos:', quantidadeDeIngressos, 'ingressos')
console.log('---Valores---')
console.log(mensagemPrecoUnitario)
console.log(mensagemValorTotal)