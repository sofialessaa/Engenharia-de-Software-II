let num1 = prompt('Coloque o primeiro número: ')
let operacao = prompt('Escolha a operação: (Soma ou Subtração)')
let num2 = prompt('Coloque o segundo número: ')

let stringOperacao = operacao.toString();
num1 = parseInt(num1)
num2 = parseInt(num2)

soma = function (v1, v2){
    if (stringOperacao == 'Soma'){
        return v1 + v2
    }
    else if(stringOperacao == 'Subtração'){
        return v1 - v2
    }       
}
alert('O resultado é: ' + soma(num1,num2))