let livros = JSON.parse(localStorage.getItem("livros")) || [];

let indice = localStorage.getItem("editar");

document.getElementById("titulo").value = livros[indice].titulo;
document.getElementById("autor").value = livros[indice].autor;
document.getElementById("ano").value = livros[indice].ano;
document.getElementById("codigo").value = livros[indice].codigo;
document.getElementById("editora").value = livros[indice].editora;
document.getElementById("imagem").value = livros[indice].imagem;

function salvarEdicao(){

livros[indice] = {

titulo: document.getElementById("titulo").value,
autor: document.getElementById("autor").value,
ano: document.getElementById("ano").value,
codigo: document.getElementById("codigo").value,
editora: document.getElementById("editora").value,
imagem: document.getElementById("imagem").value

};

localStorage.setItem(
"livros",
JSON.stringify(livros)
);

location.href = "listagem.html";

}