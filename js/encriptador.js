function encriptar(texto) {
    let textoSinTildes = eliminarTildes(texto);
    let encriptado = textoSinTildes.replaceAll("e", "enter");
    encriptado = encriptado.replaceAll("i", "imes");
    encriptado = encriptado.replaceAll("a", "ai");
    encriptado = encriptado.replaceAll("o", "ober");
    encriptado = encriptado.replaceAll("u", "ufat");
    encriptado = encriptado.replaceAll("E", "ENTER");
    encriptado = encriptado.replaceAll("I", "IMES");
    encriptado = encriptado.replaceAll("A", "AI");
    encriptado = encriptado.replaceAll("O", "OBER");
    encriptado = encriptado.replaceAll("U", "UFAT");
    return encriptado;
};

function desencriptar(texto) {
    let textoSinTildes = eliminarTildes(texto);
    let desencriptado = textoSinTildes.replaceAll("ufat", "u");
    desencriptado = desencriptado.replaceAll("ober", "o");
    desencriptado = desencriptado.replaceAll("ai", "a");
    desencriptado = desencriptado.replaceAll("imes", "i");
    desencriptado = desencriptado.replaceAll("enter", "e");
    desencriptado = desencriptado.replaceAll("UFAT", "U");
    desencriptado = desencriptado.replaceAll("OBER", "O");
    desencriptado = desencriptado.replaceAll("AI", "A");
    desencriptado = desencriptado.replaceAll("IMES", "I");
    desencriptado = desencriptado.replaceAll("ENTER", "E");
    return desencriptado;
};

function eliminarTildes(texto) {
    return texto
    .normalize('NFD')
    .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1")
    .normalize();
}