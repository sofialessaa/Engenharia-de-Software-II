let codigo = prompt('Informe seu código: ')
let horasTrabalhadas = prompt('Informe o número de horas trabalhadas no mês:')
let turno = prompt('Informe Seu turno(M-Matutino, V-Vespertino ou N-Noturno):')
let categoria = prompt('Informe sua categoria (F-Funcionário ou G-Gerente): ')
let salarioMinimo = prompt('Informe o Salario mínimo: ')

var valorHora, salarioInicial, auxilioAlimentacao, salarioFinal;

codigo = parseInt(codigo)
horasTrabalhadas = parseInt(horasTrabalhadas)
salarioMinimo = parseFloat(salarioMinimo)
switch (categoria) {
    case 'G':
        switch (turno) {
            case 'M':
            case 'V':
                valorHora = 0.04 * salarioMinimo;
                break;
            default:
                valorHora = 0.02 * salarioMinimo;
                break;
        }
        break;
    case 'F':
        switch (turno) {
            case 'M':
            case 'V':
                valorHora = 0.01 * salarioMinimo;
                break;
            default:
                valorHora = 0.02 * salarioMinimo;
                break;
        }
        break;
}
salarioInicial = horasTrabalhadas * valorHora;

// Calcula o valor do auxílio-alimentação
if (salarioInicial <= 800) {
    auxilioAlimentacao = salarioInicial * 0.25;
} else if (salarioInicial <= 1200) {
    auxilioAlimentacao = salarioInicial * 0.20;
} else {
    auxilioAlimentacao = salarioInicial * 0.15;
}

// Calcula o salário final
salarioFinal = salarioInicial + auxilioAlimentacao;
alert('Numero de horas trabalhadas: ' + horasTrabalhadas + '\n' + 'Valor da hora Trabalhada: R$' + valorHora + '\n' + 'Salário Inicial: R$' + salarioInicial + '\n' + 'Auxilio-Alimentação: R$' + auxilioAlimentacao + '\n' + 'Salário Final: R$' + salarioFinal)