let livros = [];
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() { // Função assincrona
    const res = await fetch(endpointDaAPI) // faz a requisição http
    livros = await res.json(); // atribui os dados da requisição http
    let livrosComDesconto = aplicarDesconto(livros);
    exibirLivrosNaTela(livrosComDesconto);
}