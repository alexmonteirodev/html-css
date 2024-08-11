var clearbutton = document.getElementById('clearbutton')
var mortgageinput = document.getElementById('mortgageinput')
var mortgageterminput = document.getElementById('mortgageterminput')
var interestrateinput = document.getElementById('interestrateinput')
var radioinput = document.getElementsByClassName('radioinput')
var repaydiv = document.getElementsByClassName('inputradio')[0]
var intrstdiv = document.getElementsByClassName('inputradio')[1]
var button = document.getElementById('calbtn')
var h2 = document.getElementById('title')
var p = document.getElementById('p')
var img = document.getElementById('img')
var resdiv = document.getElementById('res')
var h3 = document.getElementById('resgreen')


clearbutton.addEventListener('click', clear)
function clear(params) { //clear button
    mortgageinput.value = ''
    mortgageterminput.value = ''
    interestrateinput.value = ''
    repaydiv.style.background = '#FFFFFF'
    repaydiv.style.border = '1px solid var(--azulescuro)'
    intrstdiv.style.background = '#FFFFFF';
    intrstdiv.style.border = '1px solid var(--azulescuro)';
    resdiv.style.display = 'none'
    //adicionar a img ao clicar no clear
    for (let i = 0; i < radioinput.length; i++) {
        radioinput[i].checked = false
    }
}


for (let i = 0; i < radioinput.length; i++) { //mortgage type inputs style
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


button.addEventListener('click', calculate) //calculate button & result box
function calculate(params) {
    h2.innerHTML = 'Your results'
    p.innerHTML = 'Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.'
    img.remove()
    resdiv.style.display = 'block'

    if (mortgageinput.value > 0 && mortgageterminput.value > 0 && interestrateinput.value > 0 && radioinput[0].checked ) { // Repayment
        window.alert('deu bom')
        var r = interestrateinput.value/12
        h3.innerHTML = (mortgageinput.value * r * (1 + r)**300) / ((1 + r)**300 - 1) // CONTINUAR DAQUI-----
    }  else { // validation
        window.alert('deu ruim')
    }
}
