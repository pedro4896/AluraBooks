let livrosComDesconto;
function aplicarDesconto(livros) {
    const desconto = 0.3;
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)}//Faz uma do array para outro objeto e altera somente o preço
    })

    return livrosComDesconto;
}