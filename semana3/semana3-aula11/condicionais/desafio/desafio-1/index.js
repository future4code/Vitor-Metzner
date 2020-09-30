const genero = prompt('Qual o gênero do filme?').toLowerCase()
const preco = Number(prompt('Qual o preço do ingresso?'))

if (genero === 'fantasia' && preco < 15) {
const snack = prompt('Qual snack você quer comprar?')
 console.log('Bom filme!')
 console.log('... com', snack)
} else {
 console.log('Escolha outro filme! :(')
}