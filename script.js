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


var iframe = document.getElementById('video-iframe');

// Event listener para quando o vídeo é carregado
iframe.addEventListener('load', function() {
  var player = new YT.Player(iframe);

  // Event listener para quando o estado do player muda
  player.addEventListener('onStateChange', function(event) {
    // Verifica se o vídeo está pausado
    if (event.data === YT.PlayerState.PAUSED) {
      // Remove a classe ytp-title-text
      removeTitleText();
    }
  });
});

// Função para remover a classe ytp-title-text
function removeTitleText() {
  var videoContainer = document.getElementsByClassName('video-container')[0];
  var titleText = videoContainer.querySelector('.ytp-embed:not(.ad-showing) .ytp-title-text');

  if (titleText) {
    titleText.classList.remove('ytp-title-text');
  }
}






