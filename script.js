let beneficiosBtns = [...document.querySelectorAll('.section4 .content .TCC .box .botao')]

let duvidasBtns = [...document.querySelectorAll('.section7 .duvidas-box .botao')]

beneficiosBtns.map((e) => {
    e.addEventListener('click', () => {
        let paragrafo = e.nextElementSibling
        paragrafo.classList.toggle('mostrar')
        let img = e.children[0]

        if (paragrafo.classList == 'mostrar') {
            img.classList.add('girar')
        } else {
            img.classList.remove('girar')
        }
    })
})

duvidasBtns.map((e) => {
    e.addEventListener('click', () => {
        let paragrafo = e.nextElementSibling
        paragrafo.classList.toggle('mostrar')
        let img = e.children[1]

        if (paragrafo.classList == 'mostrar') {
            img.classList.add('girar')
        } else {
            img.classList.remove('girar')
        }
        
        
    })

    
})






