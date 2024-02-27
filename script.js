// Verifica se o navegador é Safari
function isSafari() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}

// Função para carregar o arquivo CSS específico para o Safari e desativar o arquivo style.css
function loadSafariStylesheet() {
    var defaultStyle = document.getElementById('defaultStyle');
    defaultStyle.disabled = true; // Desativa o arquivo style.css

    var safariStyle = document.getElementById('safariStyle');
    safariStyle.disabled = false; // Ativa o arquivo safari-style.css
}

// Carrega o arquivo CSS específico para o Safari e desativa o arquivo style.css se necessário
if (isSafari()) {
    loadSafariStylesheet();
    alert("ATENÇÃO CORNO(A)" + '\n\n' + "Se você é modinha de iPhone e é corno(a), clique em fechar!");
} else {
    alert("Este cliente não está usando o Safari");
}

