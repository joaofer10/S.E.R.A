// Lista de compras

let item1 = 'Mexerica'
let item2 = 'Goiaba'
let item3 = 'Morango'
let item4 = 'Uva'

console.log(item1)
console.log(item2)
console.log(item3)
console.log(item4)

// Lista de compra com Array

let ListaFrutas = ['Abacaxi', 'banana', 'kiwi', 'lixia']

console.log(ListaFrutas)

// Lista de top personagens da etec

let persona = []

persona[0] = 'Daniel'
persona[1] = 'Henrique'
persona[2] = 'Fausto'
persona[3] = 'Gabriel'
persona[4] = 'Bryan'

console.log(persona)

// Fausto - guilherme

persona[2] = 'Guilherme'
console.log(persona)

// Lista de dados lidos do usuário

let profs = []

for(i =0; i<=4; i++){
    let prof = prompt('digite o nome de um professor')
    profs[i] = prof
}

console.log('Lista de professores mais: ', profs)

// tamanho do array - quantas posições
console.log(profs.length)