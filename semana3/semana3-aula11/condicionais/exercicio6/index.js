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

switch (turno) {
   case 'M':
     msg = 'Bom dia!'
     break
   case 'V':
     msg = 'Boa tarde!'
     break
   case 'N':
     msg = 'Boa noite!'
     break
   default:
     msg = 'Informe um valor válido'
     break
 }