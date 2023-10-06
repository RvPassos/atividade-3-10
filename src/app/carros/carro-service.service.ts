import { Injectable } from '@angular/core';
import { Carro } from './carros';

@Injectable({
  providedIn: 'root'
})
export class CarroServiceService {

  lista: Carro[] = [];
  proximoId: number = 1;

  constructor() { 

  }

  adicionarPessoa(nome: string, ano: number): void{
    const novoCarro = new Carro(this.proximoId, nome, ano);
    this.lista.push(novoCarro);
    this.proximoId++;
  }

  getId(id: number): Carro{
    for(let i = 0; i < this.lista.length; i++){
      if(this.lista[i].id == id){
        return this.lista[i];
      }
    }
    return new Carro(0, "", 0)
  }

}
