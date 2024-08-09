var clearbutton = document.getElementById('clearbutton')
var mortgageinput = document.getElementById('mortgageinput')
var mortgageterminput = document.getElementById('mortgageterminput')
var interestrateinput = document.getElementById('interestrateinput')
var radioinput = document.getElementsByClassName('radioinput')
var repaydiv = document.getElementsByClassName('inputradio')[0]
var intrstdiv = document.getElementsByClassName('inputradio')[1]

clearbutton.addEventListener('click', clear)
function clear(params) { //clear button
    mortgageinput.value = ''
    mortgageterminput.value = ''
    interestrateinput.value = ''
    repaydiv.style.background = '#FFFFFF'
    repaydiv.style.border = '1px solid var(--azulescuro)'
    intrstdiv.style.background = '#FFFFFF';
    intrstdiv.style.border = '1px solid var(--azulescuro)';
    for (let i = 0; i < radioinput.length; i++) {
        radioinput[i].checked = false
    }
}


for (let i = 0; i < radioinput.length; i++) { //mortgage type input
    radioinput[i].addEventListener('click',radioinpt)
}
function radioinpt(params) { 
    if (radioinput[0].checked ) {
        repaydiv.style.background = '#FAFADF'
        repaydiv.style.border = '1px solid var(--verde)'
        intrstdiv.style.background = '#FFFFFF';
        intrstdiv.style.border = '1px solid var(--azulescuro)';
    } else if (radioinput[1].checked) {
        intrstdiv.style.background = '#FAFADF'
        intrstdiv.style.border = '1px solid var(--verde)'
        repaydiv.style.background = '#FFFFFF'
        repaydiv.style.border = '1px solid var(--azulescuro)'
    }
    }

