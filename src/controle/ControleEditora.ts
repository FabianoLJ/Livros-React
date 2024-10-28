import { Editora } from '../modelo/Editora';


const editoras: Array<Editora> = [
  { codEditora: 1, nome: 'Alpha' },
  { codEditora: 2, nome: 'Beta' },
  { codEditora: 3, nome: 'Gama' }
];


export class ControleEditora {

  
  getEditoras(): Array<Editora> {
    return editoras;
  }

 
  getNomeEditora(codEditora: number): string | undefined {
    const editoraEncontrada = editoras.filter(editora => editora.codEditora === codEditora);
    return editoraEncontrada.length > 0 ? editoraEncontrada[0].nome : undefined;
  }
}

export default ControleEditora;