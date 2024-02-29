//Caixa de textos
let nome = prompt('Qual seu nome?');
let altura = prompt('Qual sua altura em centímetros?');
let peso = prompt('Qual seu peso?');

//Declarando os dados para float
altura = parseFloat(altura);
peso = parseFloat(peso);

//Conversao da altura cm para m
let alturametros = altura/100;

//Calculo 
let m = peso/(alturametros ** 2)


//parte do imc
if (m < 16) {
    aviso = 'Baixo peso, muito grave.';
} else if (16 <= m && m <= 16.99) {
    aviso = 'Baixo peso, grave.';
} else if (17 <= m && m <= 18.49) {
    aviso = 'Baixo peso.';
} else if (18.5 <= m && m <= 24.99) {
    aviso = 'Peso normal.';
} else if (25 <= m && m <= 29.99) {
    aviso = 'Sobrepeso.';
} else if (30 <= m && m <= 34.99) {
    aviso = 'Obesidade grau I.';
} else if (35 <= m && m <= 39.99) {
    aviso = 'Obesidade grau II.';
} else if (m >= 40) {
    aviso = 'Obesidade grau III.';
}

let saida = alert(nome + ' possui índice de massa corporal igual a ' + m.toFixed(2) + ', sendo classificado como: ' + aviso);