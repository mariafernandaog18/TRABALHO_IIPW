function cadastrarUsuario(){

let nome=document.getElementById("nome").value;
let senha=document.getElementById("senha").value;

let usuarios=JSON.parse(localStorage.getItem("usuarios"))||[];

usuarios.push({
nome,
senha
});

localStorage.setItem(
"usuarios",
JSON.stringify(usuarios)
);

alert("Usuário cadastrado!");

}

function login(){

let nome=document.getElementById("nome").value;
let senha=document.getElementById("senha").value;

let usuarios=JSON.parse(localStorage.getItem("usuarios"))||[];

let encontrado=usuarios.find(
u=>u.nome===nome && u.senha===senha
);

if(encontrado){

localStorage.setItem("logado","true");

location.href="index.html";

}
else{

alert("Usuário não encontrado");

}

}