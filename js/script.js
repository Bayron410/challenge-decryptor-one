let inputUsuario = document.querySelector("#texto-entrada");
let botonEncriptar = document.querySelector("#encriptar");
let botonDesencriptar = document.querySelector("#desencriptar");
let botonPegar = document.querySelector("#pegar");
let botonCopiar = document.querySelector("#copiar");
let areaResultado = document.querySelector("#area-resultado");
let figura = document.querySelector("#figura");
let prueba = document.querySelector("#prueba");

botonEncriptar.addEventListener("click", function() {
    if(inputUsuario.value.length == 0) {
        figura.classList.remove("invisible");
        areaResultado.classList.add("invisible");
        prueba.classList.remove("invisible");
        botonCopiar.classList.add("invisible");
        alert("Debe ingresar un texto para encriptar.");
    } else {
        resultado = encriptar(inputUsuario.value);
        areaResultado.value = resultado;
        figura.classList.add("invisible");
        areaResultado.classList.remove("invisible");
        prueba.classList.add("invisible");
        botonCopiar.classList.remove("invisible");
    }
});

function encriptar(texto) {
    let encriptado = texto.replaceAll("e", "enter");
    encriptado = encriptado.replaceAll("i", "imes");
    encriptado = encriptado.replaceAll("a", "ai");
    encriptado = encriptado.replaceAll("o", "ober");
    encriptado = encriptado.replaceAll("u", "ufat");
    return encriptado;
};

botonDesencriptar.addEventListener("click", function() {
    if(inputUsuario.value.length == 0) {
        figura.classList.remove("invisible");
        areaResultado.classList.add("invisible");
        prueba.classList.remove("invisible");
        alert("Debe ingresar un texto para desencriptar.");
    } else {
        resultado = desencriptar(inputUsuario.value);
        areaResultado.value = resultado;
        figura.classList.add("invisible");
        areaResultado.classList.remove("invisible");
        prueba.classList.add("invisible");
    }
});

function desencriptar(texto) {
    let desencriptado = texto.replaceAll("ufat", "u");
    desencriptado = desencriptado.replaceAll("ober", "o");
    desencriptado = desencriptado.replaceAll("ai", "a");
    desencriptado = desencriptado.replaceAll("imes", "i");
    desencriptado = desencriptado.replaceAll("enter", "e");
    return desencriptado;
};

botonCopiar.addEventListener("click", function() {
    navigator.clipboard.writeText(areaResultado.value);
});

botonPegar.addEventListener("click", function() {
    navigator.clipboard.readText().then(
        clipText => inputUsuario.value = clipText);
});