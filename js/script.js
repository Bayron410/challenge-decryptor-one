let inputUsuario = document.querySelector("#texto-entrada");
let botonEncriptar = document.querySelector("#encriptar");
let botonDesencriptar = document.querySelector("#desencriptar");
let areaResultado = document.querySelector("#area-resultado");
let figura = document.querySelector("#figura");
let prueba = document.querySelector("#prueba");
let main = document.querySelector("main");

inicio();

function inicio() {
    if(screen.width < 1024) {
        figura.classList.add("invisible");
        main.classList.remove("nowrap");
    } else {
        figura.classList.remove("invisible");
        main.classList.add("nowrap");
    }
    
    if(screen.width <= 1200) {
        inputUsuario.cols = "25";
    } else {
        inputUsuario.cols = "30";
    }
}

window.addEventListener("resize", inicio);

function comprobarCampos(texto) {
    if(texto.length == 0) {
        figura.classList.remove("invisible");
        prueba.classList.remove("invisible");
        areaResultado.classList.add("invisible");
        botonCopiar.classList.add("invisible");
        return true;
    } else {
        figura.classList.add("invisible");
        prueba.classList.add("invisible");
        areaResultado.classList.remove("invisible");
        botonCopiar.classList.remove("invisible");
        return false;
    }
}

botonEncriptar.addEventListener("click", function() {

    
    if(comprobarCampos(inputUsuario.value)) {
        alert("Debe ingresar un texto para encriptar.");
    } else {
        resultado = encriptar(inputUsuario.value);
        areaResultado.value = resultado;
    }
});

botonDesencriptar.addEventListener("click", function() {
    if(comprobarCampos(inputUsuario.value)) {
        alert("Debe ingresar un texto para desencriptar.");
    } else {
        resultado = desencriptar(inputUsuario.value);
        areaResultado.value = resultado;
    }
});