let imagem = document.getElementById("troca-imagem2"); // vai ao html e procura um elemento pelo id troca-imagem2

// quando aplicamos o opacity = 0 o elemento continua lá, porém, fica oculto, permitindo que a outra imagem apareça
//logica do if: se a imagem estiver oculta ele faz aparecer, se não deixa oculta

function trocaImagem() {
  if (imagem.style.opacity == 0) {
    imagem.style.opacity = 1;
  } else {
    imagem.style.opacity = 0;
  }
}

//  setInterval chama a funcao trocaImagem( ) a cada 2segundos
setInterval(function () {
  trocaImagem();
}, 2000);