// Atribui a string 
const respostaDoUsuario = prompt("Digite o número que você quer testar?")
// Number e atribuição para a variavel numero
const numero = Number(respostaDoUsuario)

// O operador % devolve o resto de uma divisão
// Aqui está checando se o numero é par
if(numero % 2 === 0) { // Numero par
  console.log("Passou no teste.")
} else { // Numero impar
  console.log("Não passou no teste.")
}