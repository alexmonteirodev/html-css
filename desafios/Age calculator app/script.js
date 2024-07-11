var button = document.getElementById('btn')
var date = new Date()
var actualyear = date.getFullYear()
var actualmonth = date.getMonth() + 1
var actualday = date.getDate()

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
    result[0].innerHTML = 'teste'
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
    label[2].innerHTML = 'Year*'
    label[2].style.color = '#F0686C'
    result[2].innerHTML = '--'
} else {
    error[2].style.display = 'none'
    textarea[2].style.border = '1px solid var(--inputcolor)'
    label[2].style.color = 'var(--grey)'
    label[2].innerHTML = 'Year'
    // result[0].innerHTML = (actualyear-1) - year
}
if (day == '' || month == '' || year == '') { // YEAR
    result[0].innerHTML = '--'
} else if (actualday < day && actualmonth > month) {
    result[0].innerHTML = actualyear - year
} else {
    result[0].innerHTML = (actualyear - year) - 1
}

if (day == '' || month == '' || year == '') { // MONTH
    result[1].innerHTML = '--'
} else if (month == actualmonth) {
    result[1].innerHTML = 0
} else if (actualmonth < month) {
    result[1].innerHTML = (12 - month) + (actualmonth - 1)
} else {//fez niv
    result[1].innerHTML = (actualmonth - month) -1
}

//FAZER q A PARTIR DAQUI-----------------------------------------------------
// if (actualday <= day) { //DAYS loop dos meses que ja passaram somando os ultimos dias de cada mes + dia atual
//     result[2].innerHTML = actualday + (30 - day)
// } else {
//     result[2].innerHTML = actualday
// }
if (day == '' || month == '' || year == '') { // Day
    result[2].innerHTML = '--'
} else if ([1,3,5,7,8,10,12].includes(month)) { //31
    var first = result[2].innerHTML = (31 - day) + actualday
} else if ([4,6,9,11].includes(month)) { //30
    var second = result[2].innerHTML = (30 - day) + actualday
} else {//fev
    var third = result[2].innerHTML = (29 - day) + actualday
}

// if (first == 31 || second == 30 || third == 29) {
//     result[0].innerHTML += 1
// } 
}