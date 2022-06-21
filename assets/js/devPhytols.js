const exibirResposta = document.querySelector("#resultado")
const perguntarBtn = document.querySelector("#gerar")

const maisculasMinusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let Numeros = '';
const letrasNumeros = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let caracteresEspeciais = '';

function AtivarNumeros() {
    if (Numeros == '0123456789') {
        Numeros = ''
    } else {
        Numeros = '0123456789'
    }
}

function AtivarCaracteres() {
    if (caracteresEspeciais == '{}][^-_()!@#$%&*=+?><') {
        caracteresEspeciais = '';
    } else {
        caracteresEspeciais = '{}][^-_()!@#$%&*=+?><';
    }
}

function GerarSenha() {
    var valores = [maisculasMinusculas, Numeros, letrasNumeros, caracteresEspeciais];
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
    let copiarTexto = document.getElementById("resultado");

    if (copiarTexto.value == '') {
        alert('Não existe texto para copiar')
    } else {

        copiarTexto.select();

        navigator.clipboard.writeText(copiarTexto.value);
        copiarTexto.value = 'Texto Copiado!';

        setTimeout(function () {
            copiarTexto.value = '';
        }, 1000)
    }
}