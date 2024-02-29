let escolha = prompt('Deseja rastreamento? S-Sim e N-Não')

let numeroPecas = prompt('Digite o número de peças: ')
let regiao = prompt('Digite a região (Sul, Sudeste ou Centro-oeste): ')
let distanciaKm = prompt('Digite a distancia em KM: ')

numeroPecas = parseInt(numeroPecas);
let stringRegiao = regiao.toString();

if (numeroPecas <= 1000){
    if (stringRegiao == 'Sul'){

        var fretePorPecas = numeroPecas * 1
        var fretePorKm =  distanciaKm * 5.35
        var frete = fretePorPecas + fretePorKm
    }
    if (stringRegiao == 'Sudeste'){

        var fretePorPecas = numeroPecas * 1.2
        var fretePorKm =  distanciaKm * 5.35
        var frete = fretePorPecas + fretePorKm
    }
    if (stringRegiao == 'Centro-oeste'){

        var fretePorPecas = numeroPecas * 1.3
        var fretePorKm =  distanciaKm * 5.35
        var frete = fretePorPecas + fretePorKm
    }
}else if (numeroPecas > 1000){

    var numeroPecasDeSobra = numeroPecas - 1000
    numeroPecas = numeroPecas - numeroPecasDeSobra

    if (stringRegiao == 'Sul'){

        var fretePorPecas = numeroPecas * 1 + numeroPecasDeSobra * 0.9
        var fretePorKm =  distanciaKm * 5.35
        var frete = fretePorPecas + fretePorKm
    }
    if (stringRegiao == 'Sudeste'){

        var fretePorPecas = numeroPecas * 1.2 + numeroPecasDeSobra * 1.056
        var fretePorKm =  distanciaKm * 5.35
        var frete = fretePorPecas + fretePorKm
    }
    if (stringRegiao == 'Centro-oeste'){

        var fretePorPecas = numeroPecas * 1.3 + numeroPecasDeSobra * 1.131
        var fretePorKm =  distanciaKm * 5.35
        var frete = fretePorPecas + fretePorKm
        //var frete = numeroPecas * 1.3 + distanciaKm * 5.35  + numeroPecasDeSobra * 1.131
    }
}

if (escolha== 'S'){
    alert('Será cobrado uma taxa de R$200,00 pelo rastreamento')
    frete = frete + 200
}
else{
    alert('Nao terá rastreamento')
}

alert('Valor do frete pelas peças: ' + fretePorPecas)
alert('Valor do frete por quilômetro: ' + fretePorKm)
alert('Total do frete: ' + frete)