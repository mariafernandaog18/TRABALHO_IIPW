function salvarLivro(){

let livros=JSON.parse(localStorage.getItem("livros"))||[];

livros.push({

titulo:document.getElementById("titulo").value,

autor:document.getElementById("autor").value,

ano:document.getElementById("ano").value,

codigo:document.getElementById("codigo").value,

editora:document.getElementById("editora").value,

imagem:document.getElementById("imagem").value

});

localStorage.setItem(
"livros",
JSON.stringify(livros)
);

location.href="listagem.html";

}