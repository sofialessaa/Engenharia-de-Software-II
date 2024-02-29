let idade = prompt('Informe sua idade:')

idade = parseInt(idade)

if (0 <= idade && idade < 15) {
    saida = 'Criança'
} 
else if (15 <= idade && idade < 30) {
    saida = 'Jovem'
} 
else if (30 <= idade && idade < 60) {
    saida = 'Adulto'
}
else if (60 <= idade) {
    saida = 'Idoso'
}

alert(saida)