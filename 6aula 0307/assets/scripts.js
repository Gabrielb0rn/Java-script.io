// function mudarCorDeFundo() {
//     document.body.style.backgroundColor = gerarCorAleatoria();
// }

// function gerarCorAleatoria() {   
//     const letras = '0123456789ABCDEF';
//     let cor = '#';
//     for (let i = 0; i < 6; i++) {
//         cor += letras[Math.floor(Math.random() * 16)];
//     }
//     return cor;
// }


function mudarCorDeFundo() {
    const corSelecionada = document.getElementById('cor').value;
    if (corSelecionada) {
        document.body.style.backgroundColor = corSelecionada;
    }
}
