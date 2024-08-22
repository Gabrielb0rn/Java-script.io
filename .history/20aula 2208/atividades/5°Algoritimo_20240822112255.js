/*
Pedro está organizando seus filmes favoritos. Crie um array chamado filmesFavoritos com três filmes de sua escolha. 
Modifique o primeiro filme para um novo título. Verifique se o último filme da lista é "Harry Potter". 
Se não for, adicione "Harry Potter" ao final da lista. Imprima a lista de filmes favoritos no final.
*/

// Criando um array com três filmes favoritos
let filmesFavoritos = ["Matrix", "O Senhor dos Anéis", "Star Wars"];

// Modificando o primeiro filme para um novo título
filmesFavoritos[0] = "Inception";

// Verificando se o último filme da lista é "Harry Potter"
if (filmesFavoritos[filmesFavoritos.length - 1] !== "Harry Potter") {
    filmesFavoritos.push("Harry Potter");
}

// Imprimindo a lista de filmes favoritos no final
console.log("Lista de Filmes Favoritos:", filmesFavoritos);
