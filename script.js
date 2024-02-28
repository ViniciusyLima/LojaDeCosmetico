function dropdown() {
    var elemento = document.getElementById("dropdown-menu");
    var estilo = window.getComputedStyle(elemento);

    if (estilo.display === "none") {
        elemento.style.display = "block";
    } else {
        elemento.style.display = "none";
    }
}