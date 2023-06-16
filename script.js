let beneficiosBtns = [...document.querySelectorAll('.section4 .content .TCC .box .botao')]

let duvidasBtns = [...document.querySelectorAll('.section7 .duvidas-box .botao')]

beneficiosBtns.map((e) => {
    e.addEventListener('click', () => {
        let paragrafo = e.nextElementSibling
        let img = e.children[0]

        paragrafo.classList.toggle('mostrar')

        if (paragrafo.classList.contains('mostrar')) {
            img.classList.add('girar')
        } else {
            img.classList.remove('girar')
        }
    })
})

duvidasBtns.map((e) => {
    e.addEventListener('click', () => {
        let botao = e.parentElement
        let img = e.children[1]
        let paragrafo = e.nextElementSibling

        let alturaParagrafo = paragrafo.offsetHeight


        if (botao.classList.contains('mostrar') == false) {
            duvidasBtns.map((k) => {
                let botao = k.parentElement
                let img = k.children[1]
                
                if (botao.classList.contains('mostrar')) {
                    botao.classList.remove('mostrar')
                    botao.style.height = `${55}px`
                    img.classList.remove('girar')
                }
            })
        }

        if (botao.classList.contains('mostrar')) {
            botao.classList.remove('mostrar')
            botao.style.height = `${55}px`
        } else {
            botao.classList.add('mostrar')
            botao.style.height = `${alturaParagrafo + 55}px`
        }
        
        if (botao.classList.contains('mostrar')) {
            img.classList.add('girar')
        } else {
            img.classList.remove('girar')
        }
    })
})

