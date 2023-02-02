const textoEntrada = document.getElementById("input");
const botonEncriptar = document.querySelector(".encriptar");
const botonDesencriptar = document.querySelector(".desencriptar");

function encriptar(){
    let texto = textoEntrada.value;
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
    output.value = texto;
}

function desencriptar(){
    let texto = textoEntrada.value;
    texto = texto.replace(/enter/g, 'e');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/ai/g, 'a');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ufat/g, 'u');
    output.value = texto;
}

botonEncriptar.addEventListener("click", encriptar);
botonDesencriptar.addEventListener("click", desencriptar);