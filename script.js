let beneficiosBtns = [...document.querySelectorAll('.section4 .content .TCC .box .botao')]

let duvidasBtns = [...document.querySelectorAll('.section7 .duvidas-box .botao')]

beneficiosBtns.map((e) => {
    e.addEventListener('click', () => {
        let paragrafo = e.nextElementSibling
        let img = e.children[0]
        let botao = e.parentElement

        let alturaParagrafo = paragrafo.offsetHeight

        paragrafo.classList.toggle('mostrar')

        if (paragrafo.classList.contains('mostrar')) {
            img.classList.add('girar')
            botao.style.height = `${alturaParagrafo + 55}px`
        } else {
            img.classList.remove('girar')
            botao.style.height = `${55}px`
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

var offset = 130; 

function handleMenuClick(event) {
  event.preventDefault(); 
  
  var targetId = event.target.getAttribute("href"); 
  var targetElement = document.querySelector(targetId); 

  if (targetElement) {
    var targetOffsetTop = targetElement.offsetTop - offset; 

    window.scrollTo({
      top: targetOffsetTop,
      behavior: "smooth"
    });
  }
}


var menuLinks = document.querySelectorAll(".menu-area .content nav ul a");
for (var i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener("click", handleMenuClick);
}
