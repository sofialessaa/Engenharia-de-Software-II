let nota1 = prompt('Coloque sua nota da Atividade prática em laboratório:')
let nota2 = prompt('Coloque sua nota da Prova do semestre:')
let nota3 = prompt('Coloque sua nota do Trabalho teórico:')

nota1 = parseFloat(nota1)
nota2 = parseFloat(nota2)
nota3 = parseFloat(nota3)

let peso1 = 0.2
let peso2 = 0.5
let peso3 = 0.3

let media = ((peso1*nota1) + (peso2*nota2) + (peso3*nota3))/ (peso1 + peso2 + peso3)

if (0 <= media && media < 5) {
    classificacao = 'F'
} else if (5 <= media && media < 6) {
    classificacao = 'E'
} else if (6 <= media && media < 7) {
    classificacao = 'D'
} else if (7 <= media && media < 8) {
    classificacao = 'C'
} else if (8 <= media && media < 9) {
    classificacao = 'B'
} else if (9 <= media && media < 10) {
    classificacao = 'A'
}

let saida = alert('A média do aluno é = ' + media + ' e sua classificação é ' + classificacao)