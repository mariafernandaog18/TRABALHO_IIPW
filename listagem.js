let livros = JSON.parse(localStorage.getItem("livros")) || [];

mostrarLivros(livros);

function mostrarLivros(lista){

let tabela = document.getElementById("tabelaLivros");

tabela.innerHTML = "";

lista.forEach((livro,index)=>{

tabela.innerHTML += `
<tr>

<td>${livro.titulo}</td>

<td>${livro.autor}</td>

<td>${livro.ano || "N/A"}</td>

<td>${livro.codigo || "N/A"}</td>

<td>${livro.editora || "N/A"}</td>

<td>

<button onclick="editarLivro(${index})">
✏️
</button>

<button onclick="excluirLivro(${index})">
🗑️
</button>

</td>

</tr>
`;

});

}

function buscarLivro(){

let busca = document.getElementById("busca").value.toLowerCase();

let filtrados = livros.filter(
livro => livro.titulo.toLowerCase().includes(busca)
);

mostrarLivros(filtrados);

}