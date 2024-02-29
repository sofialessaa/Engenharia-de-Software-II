let data = prompt('Digite a data: DD/MM/YYYY')
let sdata = data.split('/');
let mes = parseInt(sdata[1]);

if (mes == '01'){
    mes = 'Janeiro'
}else if (mes == '02'){
    mes = 'Fevereiro'
}else if (mes == '03'){
    mes = 'MarÃ§o'
}else if (mes == '04'){
    mes = 'Abril'
}
else if (mes == '05'){
    mes = 'Maio'
}else if (mes == '06'){
    mes = 'Junho'
}else if (mes == '07'){
    mes = 'Julho'
}
else if (mes == '08'){
    mes = 'Agosto'
}
else if (mes == '09'){
    mes = 'Setembro'
}
else if (mes == '10'){
    mes = 'Outubro'
}
else if (mes == '11'){
    mes = 'Novembro'
}
else if (mes == '12'){
    mes = 'Dezembro'
}
alert(sdata[0] + ' de ' + mes + ' de ' + sdata[2])