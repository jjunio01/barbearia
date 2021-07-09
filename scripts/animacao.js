function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 200 * i);
    });
  }
  const titulo = document.querySelector('.Texo-bemvindo');
  typeWriter(titulo);