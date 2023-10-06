import { Injectable } from '@angular/core';
import { Pessoa } from './pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaServiceService {

  lista: Pessoa[] = [];
  proximoId: number = 1;

  constructor() {
      
   }

  adicionarPessoa(nome: string, idade: number): void{
    const novaPessoa = new Pessoa(this.proximoId, nome, idade);
    this.lista.push(novaPessoa);
    this.proximoId++;
  }

  getId(id: number): Pessoa{
    for(let i = 0; i < this.lista.length; i++){
      if(this.lista[i].id == id){
        return this.lista[i];
      }
    }
    return new Pessoa(0, "", 0);
  }

}
