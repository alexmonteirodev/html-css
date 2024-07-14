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

var yearresult = result[0].innerHTML
if (day == '' || month == '' || year == '') { // YEAR
    yearresult = '--'
    result[0].innerHTML = yearresult
} else if (actualday < day && actualmonth > month) {
    yearresult = actualyear - year
    result[0].innerHTML = yearresult
} else {
    yearresult = (actualyear - year) - 1
    result[0].innerHTML = yearresult
}

var monthresult = result[1].innerHTML
if (day == '' || month == '' || year == '') { // MONTH
    monthresult = '--'
    result[1].innerHTML = monthresult
} else if (month == actualmonth) {
    monthresult = 0
    result[1].innerHTML = monthresult
} else if (actualmonth < month) {
    monthresult = (12 - month) + (actualmonth - 1)
    result[1].innerHTML = monthresult
} else {//fez niv
    monthresult = (actualmonth - month) -1
    result[1].innerHTML = monthresult
}

var dayresult = result[2].innerHTML 
if (day == '' || month == '' || year == '') { // Day
    dayresult = '--'
    result[2].innerHTML = dayresult
} else if ([1,3,5,7,8,10,12].includes(month)) { //31
    dayresult = (31 - day) + actualday
    result[2].innerHTML = dayresult
} else if ([4,6,9,11].includes(month)) { //30
    dayresult = (30 - day) + actualday
    result[2].innerHTML = dayresult
} else {//fev 29
    dayresult = (29 - day) + actualday
    result[2].innerHTML = dayresult
}

if (dayresult>=31) {
    result[2].innerHTML = actualday - day
    result[1].innerHTML = monthresult +1
    result[0].innerHTML = yearresult +1
}

if (actualmonth == month && actualday == day) { //birth
    var yearvalue = document.querySelectorAll('.result')[0]
    var currentValue = Number(yearvalue.innerHTML)
    var newValue = currentValue + 1;
    yearvalue.innerHTML = newValue -1;
    result[0].innerHTML = yearvalue.innerHTML
    result[1].innerHTML = 0  
    result[2].innerHTML = 0  
}

if (day < actualday && actualmonth == month) {
    result[1].innerHTML = 0
} 

}
// APARTIR DE AQUI

//FAZER q A PARTIR DAQUI-----------------------------------------------------

// acrescentar 
// 1- caso natalia que sao 31 dias  tem que somar com month +1
// 2- 1 dia anterior ao actual day da erro e ele nao calcula (fazer um if para casos em que o niv ja passou e estamos no mesmo mesmo)


// if ([1,3,5,7,8,10,12].includes(month) && calc31>=31 ) { //31
//     result[2].innerHTML = calc30
//     result[2].innerHTML = calc30
// } else if ([4,6,9,11].includes(month)) {//30
    
// } else {
    
// } 

