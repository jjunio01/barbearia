meuLink = document.getElementsByClassName('link-lista')

for (let index = 0; index < meuLink.length; index++) {
    meuLink[index].addEventListener('mouseover', alterarCor)
    meuLink[index].addEventListener('mouseout', retornarCor)
}

function alterarCor() {
    this.style.color = 'red';
    this.style.fontSize = '22px';
}

function retornarCor() {
    this.style.color = 'whitesmoke';
    this.style.fontSize = '16px';
}
