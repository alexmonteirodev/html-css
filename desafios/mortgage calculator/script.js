var clearbutton = document.getElementById('clearbutton')
var mortgageinput = document.getElementById('mortgageinput')
var mortgageterminput = document.getElementById('mortgageterminput')
var interestrateinput = document.getElementById('interestrateinput')
var radioinput = document.getElementsByClassName('radioinput')

clearbutton.addEventListener('click', clear)
function clear(params) { //clear button
    mortgageinput.value = ''
    mortgageterminput.value = ''
    interestrateinput.value = ''
    for (let i = 0; i < radioinput.length; i++) {
        radioinput[i].checked = false
    }
}

for (let i = 0; i < radioinput.length; i++) {
        radioinput[i].addEventListener('click',radioinpt)


// radioinput.addEventListener('click',radioinpt)
function radioinpt(params) {
    if (radioinput[i].checked) {
        window.alert('deu bom')
    } else {
        window.alert('deu ruim')
    }
}
}