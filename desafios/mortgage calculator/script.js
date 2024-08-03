var clearbutton = document.getElementById('clearbutton')
var mortgageinput = document.getElementById('mortgageinput')
var mortgageterminput = document.getElementById('mortgageterminput')
var interestrateinput = document.getElementById('interestrateinput')
var radioinput = document.getElementsByClassName('radioinput')

clearbutton.addEventListener('click', clear)
function clear(params) {
    mortgageinput.value = ''
    mortgageterminput.value = ''
    interestrateinput.value = ''
    for (let i = 0; i < radioinput.length; i++) {
        radioinput[i].checked = false
    }
}