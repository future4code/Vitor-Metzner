const turno = prompt('Em qual turno você estuda? (M)atutino / (V)espertino / (N)orturno').toUpperCase()

let msg = ''

if (turno === 'M') {
 msg = 'Bom dia!'
} else if (turno === 'V') {
  msg = 'Boa tarde!'
 } else if (turno === 'N') {
  msg = 'Boa noite!'
} else {
 msg = 'Informe um valor válido'
 }