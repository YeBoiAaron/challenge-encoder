const botonEncriptar = document.querySelector(".encriptar");
const botonDesencriptar = document.querySelector(".desencriptar");
const botonCopiar = document.querySelector(".copiar");
const imagen = document.querySelector(".imagen");

function encriptar(){
    let texto = input.value;
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
    output.value = texto;
    
    if(input.value != ""){
        ocultarImagen();
    }
    else if(input.value == ""){
        mostrarImagen();
    }
}

function desencriptar(){
    let texto = input.value;
    texto = texto.replace(/enter/g, 'e');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/ai/g, 'a');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ufat/g, 'u');
    output.value = texto;

    if(input.value != ""){
        ocultarImagen();
    }
    else if(input.value == ""){
        mostrarImagen();
    }
}

function copiar(){
    if(output.value != ''){
        input.value = output.value;
    }
}

function ocultarImagen() {
    imagen.style.visibility = "hidden";
}

function mostrarImagen() {
    imagen.style.visibility = "visible";
}

botonEncriptar.addEventListener("click", encriptar);
botonDesencriptar.addEventListener("click", desencriptar);
botonCopiar.addEventListener("click", copiar);