// Atribui a string que vai ser digitada pelo usuario
let fruta = prompt("Escolha uma fruta")
// Desclaração da variavel 
let preco
// Atribui um valor para preco dependendo de qual fruta foi digitada pelo usuario
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM D.
  default:
    preco = 5
    break;
}
// Imprime no console a fruta escolhida e seu valor
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


  //a. O código serve para, ao usuário escolher uma fruta 
  //b. "O preço da fruta Maçã é R$ 2.25"
  //C. Caso retirado o break, o preço da Pêra será de R$ 5 (que é o preço do
  // default, logo abaixo)
