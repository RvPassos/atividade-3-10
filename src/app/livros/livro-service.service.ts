import { Injectable } from '@angular/core';
import { Livros } from './livros';

@Injectable({
  providedIn: 'root'
})
export class LivroServiceService {

  lista: Livros[] = [];
  proximoId: number = 1;

  constructor() { 

  }

  adicionarLivro(autor: string, titulo: string): void{
    const novoLivro = new Livros(this.proximoId, autor, titulo);
    this.lista.push(novoLivro);
    this.proximoId++;
  }

  getId(id: number): Livros{
    for(let i = 0; i < this.lista.length; i++){
      if(this.lista[i].id == id){
        return this.lista[i];
      }
    }
    return new Livros(0, "", "")
  }


}
