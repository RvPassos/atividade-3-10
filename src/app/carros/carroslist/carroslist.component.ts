import { Component } from '@angular/core';
import { Carro } from '../carros';

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent {

  lista: Carro[] = [];

  constructor(){
    let carro1: Carro = new Carro();
    carro1.id = 1;
    carro1.nome = "gol";
    carro1.ano = 2008;

    let carro2: Carro = new Carro();
    carro2.id = 2;
    carro2.nome = "monza";
    carro2.ano = 1999;

    let carro3: Carro = new Carro();
    carro3.id = 3;
    carro3.nome = "carro";
    carro3.ano = 1921;


    this.lista.push(carro1);
    this.lista.push(carro2);
    this.lista.push(carro3);
  }

}
