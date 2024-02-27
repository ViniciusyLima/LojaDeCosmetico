function isSafari() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}

// Função para modificar os estilos dos elementos para o Safari
function modifyStylesForSafari() {


}

// Modifica os estilos dos elementos para o Safari, se necessário
if (isSafari()) {
    modifyStylesForSafari();
}