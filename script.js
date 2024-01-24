function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")
  /*forma simplificada*/ //da troca de botão
  const img = document.querySelector("#profile img")
  //pegar a tag img//
  if(html.classList.contains('light')) {
  //se tiver light mode, adicionar a imagem light
   img.setAttribute('src', './assets/avatar-light.png')
  //set tiver sem light mode, manter a imagem normal//
  } else {

   img.setAttribute('src', './assets/avatar.png')
  }
}
