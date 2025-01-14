//animação ao scroll (ao scrolar  a pg, os elementos fazem animação para o lodo)
function initAnimacaoScroll() {
    const sections = document.querySelectorAll('.js-scroll')
    const metadeTela = window.innerHeight * 0.75 //tamanho da tela (eixo y) * 60%

    if (sections.length) { //comprova se tem esse elemento porque caso não tenha não faz sentido executar tudo isso
        window.addEventListener('scroll', animaScroll)

        function animaScroll() {
            sections.forEach((params) => {
                const sectionTop = params.getBoundingClientRect().top-metadeTela //- 600/60% //metodo getBounding retorna um objeto que tem as propriedades com as distancias e portanto usa-se o top
                //console.log(sectionTop) quando o elemento passa da propriedade top ela fica negativa (-3), portanto se ela for menor que 0 é porque passou, usar o console.log comentado para ver. Porém dessa forma, se cria um espaço em branco entre uma section e outra pq tem que escrolar até ficar negativo o top da próx para ela aparecer e para corrigir isso, se subtrai alguns pixels da const nesse caso, 600. Porém 600 é um valor fixo e se a tela do client for mto grande esse valor não vai servir pq não vai carregar e se for pequena dmais vai carregar antes da hora e por isso deve se usar 60%(mais ou menos metade, 50/60%) do valor da tela (isso é feito pela const metadetela).
                if (sectionTop < 0) {
                    // console.log('animar')
                    params.classList.add('ativo')
                }
            })
        }
        animaScroll() //a f aqui serve para animar o site já quando entrar nele, para que quando o cliente entre não tenha uma tela branca
    }
}
initAnimacaoScroll()



//animação slogan

const p = document.querySelector('.text-animation')
function initAnimaP() {
    setInterval(() => {
        p.classList.add('active')
    },1500)
}
initAnimaP()

//horario funcionamento

function initFuncionamento(params) {
    const funcionamento = document.querySelector('[data-semana]')
    const diasSemana = funcionamento.dataset.semana.split(',').map(Number)

    const funcionamentoHorario = document.querySelector('[data-horario]')
    const horarioSemaana = funcionamentoHorario.dataset.horario.split(',').map(Number)

    const dataAgora = new Date()
    const diaAgora = dataAgora.getDay()
    const horarioAgora = dataAgora.getHours()

    const semanaAberto = diasSemana.indexOf(diaAgora) !== -1

    const horarioAberto = (horarioAgora >= horarioSemaana[0] && horarioAgora < horarioSemaana[1]) ? true:false
    // console.log(horarioAberto)

    if ( semanaAberto && horarioAberto) {
        funcionamento.classList.add('aberto')
    }
}
initFuncionamento()
