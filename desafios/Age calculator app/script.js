var button = document.getElementById('btn')

button.addEventListener('click',calcular)

function calcular(params) { //variaveis dentro da function para captar o numero na hora do evento se botar antes vai dar 0 porque não tem nada nela
    var day = Number(document.getElementById('Day').value) //.value para pegar o valor do input
    var month = Number(document.getElementById('Month').value)
    var year = Number(document.getElementById('Year').value)

    if (day > 0 && day < 32 && month > 0 && month < 13  ) {
        window.alert(day)
    } else {
        window.alert('azedou')
    }
}