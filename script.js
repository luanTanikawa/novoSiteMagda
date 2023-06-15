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
        let paragrafo = e.nextElementSibling
        let img = e.children[1]

        if (paragrafo.classList.contains('mostrar') == false) {
            duvidasBtns.map((k) => {
                let paragrafo = k.nextElementSibling
                let img = k.children[1]
                
                if (paragrafo.classList.contains('mostrar')) {
                    paragrafo.classList.remove('mostrar')
                    img.classList.remove('girar')
                }
            })
        }

        if (paragrafo.classList.contains('mostrar')) {
            paragrafo.classList.remove('mostrar')
        } else {
            paragrafo.classList.add('mostrar')
        }
        
        if (paragrafo.classList.contains('mostrar')) {
            img.classList.add('girar')
        } else {
            img.classList.remove('girar')
        }
    })
})