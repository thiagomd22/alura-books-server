const fs = require("fs");

function getTodosFavoritos () {
    return JSON.parse(fs.readFileSync("favoritos.json"))
}

function deletaFavoritoPorId(id) {
    const livros = JSON.parse(fs.readFileSync("favoritos.json"))
    const livrosFiltrados = livros.filter(livros => livros.id !== id)
    fs.writeFileSync("favoritos.json", JSON.stringify(livrosFiltrados))
}

function insereLivro(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const favoritos = JSON.parse(fs.readFileSync("favoritos.json"))

    const livrosInseridos = livros.find( livros => livros.id === id)
    const novaListaFavoritos = [...favoritos, livrosInseridos]

    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaFavoritos))
}

module.exports = {
    getTodosFavoritos,
    deletaFavoritoPorId,
    insereLivro
}