let livros = [];
const endpointApi =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";
getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() {
  const res = await fetch(endpointApi);
  livros = await res.json();
  let livrosDesconto = aplicarDesconto(livros);
  exibirLivrosTela(livrosDesconto);
}
