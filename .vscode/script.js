function toggleMode() {
  const html = document.documentElement
  /* Código simplificado */
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/assets/avatar.png")
    img.setAttribute("alt", "personagem de anime loiro")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/assets/avatar-black.png")
    img.setAttribute("alt", "personagem de anime preto e branco")
  }
}
