const btn = document.querySelectorAll(".btn");

btn.forEach((button) => {
  button.addEventListener("click", filtrarLivros);
});

function filtrarLivros() {
  if (this.value == "front-end") {
    let livrosFiltrados = livros.filter(
      (livro) => livro.categoria == "front-end"
    );
    exibirLivrosTela(livrosFiltrados);
  } else if (this.value == "back-end") {
    let livrosFiltrados = livros.filter(
      (livro) => livro.categoria == "back-end"
    );
    exibirLivrosTela(livrosFiltrados);
  } else if (this.value == "dados") {
    let livrosFiltrados = livros.filter((livro) => livro.categoria == "dados");
    exibirLivrosTela(livrosFiltrados);
  }
}
