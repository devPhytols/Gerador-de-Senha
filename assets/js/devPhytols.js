const exibirResposta = document.querySelector("#resultado")
const perguntarBtn = document.querySelector("#gerar")

function GerarSenha() {
    var valores = ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", "0123456789", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", "{}][^-_()!@#$%&*=+?><"];
    var senhaAleatoria = [5, 3, 2, 3].map(function (len, i) {
        return Array(len).fill(valores[i]).map(function (x) {
            return x[Math.floor(Math.random() * x.length)]
        }).join('')
    }).concat().join('').split('').sort(function () {
        return 0.5 - Math.random()
    }).join('');

    exibirResposta.value = senhaAleatoria;
}

async function Copiar() {
    let copiartexto = document.getElementById("resultado")

    copiartexto.select();

    navigator.clipboard.writeText(copiartexto.value);
    copiartexto.value = 'Texto Copiado!';
    
    setTimeout(function () {
        copiartexto.value = '';
    }, 1000)
}