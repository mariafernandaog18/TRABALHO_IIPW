if(localStorage.getItem("logado")=="true"){
    document.getElementById("menuCrud").style.display="block";
}

function sair(){
    localStorage.removeItem("logado");
    location.href="login.html";
}