
import { Livro } from "../modelo/livro";


const livros: Array<Livro> = [
  {
    codigo: 1,
    codEditora: 1,
    titulo: "Livro A",
    resumo: "Resumo do Livro A",
    autores: ["Autor 1", "Autor 2"],
  },
  {
    codigo: 2,
    codEditora: 2,
    titulo: "Livro B",
    resumo: "Resumo do Livro B",
    autores: ["Autor 3"],
  },
  {
    codigo: 3,
    codEditora: 1,
    titulo: "Livro C",
    resumo: "Resumo do Livro C",
    autores: ["Autor 1"],
  },

  {
    codigo: 4,
    codEditora: 2,
    titulo: "Harry Potter",
    resumo: "Resumo do Livro ",
    autores: ["J.K Rowlling"],
  }
];


export class ControleLivro {
  
  obterLivros(): Array<Livro> {
    return livros;
  }



  incluir(novoLivro: Livro): void {
    
    const maiorCodigo =
      livros.length > 0 ? Math.max(...livros.map((livro) => livro.codigo)) : 0;
    
    novoLivro.codigo = maiorCodigo + 1;
    
    livros.push(novoLivro);
  }

  
  excluir(codigo: number): void {
    const indice = livros.findIndex((livro) => livro.codigo === codigo);
    if (indice !== -1) {
      livros.splice(indice, 1); 
    }
  }
}

export default ControleLivro;