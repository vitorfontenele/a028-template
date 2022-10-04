let p = document.getElementById("mensagem");

function checaCaps(event){
    if (event.shiftKey){
        p.textContent = "ATENÇÃO: SEGURANDO SHIFT";
    }
}

function esvaziaCaps(event){
    if (event.key === "Shift"){
        p.textContent = '';
    }
}