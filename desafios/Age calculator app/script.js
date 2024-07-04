var button = document.getElementById('btn')
var date = new Date()
var actualyear = date.getFullYear()
var actualmonth = date.getMonth()
var actualday = date.getDay()
// window.alert(actualmonth + 1)

button.addEventListener('click',calcular)

function calcular(params) { //variaveis dentro da function para captar o numero na hora do evento se botar antes vai dar 0 porque não tem nada nela
    var day = Number(document.getElementById('Day').value) //.value para pegar o valor do input
    var month = Number(document.getElementById('Month').value)
    var year = Number(document.getElementById('Year').value)
    var error = document.querySelectorAll('.error')
    var textarea = document.querySelectorAll('.textarea')
    var label = document.querySelectorAll('.legends')
    var result = document.querySelectorAll('.result')
    

    //obs: por ser uma estrutura else if ela segue a ordem, dia, mes e ano, entao se preencher um dado antes do outro o erro aparece no de antes se não quiser que isso aconteca é melhor fazer o if separado para cada um (ex: ao escrever o dia e mes errado e apertar no botao ele nao mostra que o mes tbm esta errado porque ainda esta lendo e o dia vem antes do mes )

//     if (day <= 0 || day >= 32) { // day error (para dar erro)
//         error[0].style.display = 'block'
//         textarea[0].style.border = '1px solid #F0686C'
//         label[0].style.color = '#F0686C'
//         label[0].innerHTML = 'Day*'

//     } else if (month <= 0 || month >= 13) { // month error
//         error[1].style.display = 'block' //none para sumir e block para aparecer
//         textarea[1].style.border = '1px solid #F0686C'
//         label[1].innerHTML = 'Month*'
//         label[1].style.color = '#F0686C'


//     } else if (condition) { // year error
        
//     } else {
//         window.alert('azedou')
//     }
// }

if (day <= 0 || day >= 32) { // day error (para dar erro)
    error[0].style.display = 'block'
    textarea[0].style.border = '1px solid var(--errorcolor)'
    label[0].style.color = 'var(--errorcolor)'
    label[0].innerHTML = 'Day*'
    result[2].innerHTML = '--'
} else {
    error[0].style.display = 'none'
    textarea[0].style.border = '1px solid var(--inputcolor)'
    label[0].style.color = 'var(--grey)'
    label[0].innerHTML = 'Day'
    // result[2].innerHTML = 365 - day
}

if (month <= 0 || month >= 13) { // month error
    error[1].style.display = 'block' //none para sumir e block para aparecer
    textarea[1].style.border = '1px solid #F0686C'
    label[1].innerHTML = 'Month*'
    label[1].style.color = '#F0686C'
    result[1].innerHTML = '--'
} else{
    error[1].style.display = 'none'
    textarea[1].style.border = '1px solid var(--inputcolor)'
    label[1].style.color = 'var(--grey)'
    label[1].innerHTML = 'Month'
    // result[1].innerHTML = (12 - month) + (actualmonth) // (12 - month) + actualmonth +1): +1 porque o mes de julho ele mostra como o 6 porque janeiro é 0. MAS deixo sem o +1 porque o mes só deve ser somado quando completa 30 dias
}

if (year <= 0 || year > actualyear) {
    error[2].style.display = 'block' //none para sumir e block para aparecer
    textarea[2].style.border = '1px solid #F0686C'
    label[2].innerHTML = 'Month*'
    label[2].style.color = '#F0686C'
    result[0].innerHTML = '--'
} else {
    error[2].style.display = 'none'
    textarea[2].style.border = '1px solid var(--inputcolor)'
    label[2].style.color = 'var(--grey)'
    label[2].innerHTML = 'Year'
    // result[0].innerHTML = (actualyear-1) - year
}
if (actualday < day) { // year
    result[0].innerHTML = (actualyear-1) - year
} else {
    result[0].innerHTML = (actualyear) - year
}


if (actualmonth < month) { //month actualmonth < month && day < actualday
    result[1].innerHTML = (12 - month) + (actualmonth)
} else {
    result[1].innerHTML = actualmonth - month
}
}


//tudo
if (condition) {
    
} else {
    
}