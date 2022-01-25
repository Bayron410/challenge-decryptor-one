let botonPegar = document.querySelector("#pegar");
let botonCopiar = document.querySelector("#copiar");

botonCopiar.addEventListener("click", function() {
    navigator.clipboard.writeText(areaResultado.value);
});

botonPegar.addEventListener("click", function() {
    navigator.clipboard.readText().then(
        clipText => inputUsuario.value = clipText);
});