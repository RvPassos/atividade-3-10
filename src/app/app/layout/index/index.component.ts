import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

    num1: number = 0;
    num2: number = 1;

    carregando: boolean = true;

    lista: number[] = [];

    constructor(){
      this.lista.push(1);
      this.lista.push(2);
      this.lista.push(3);
      this.lista.push(4);
      this.lista.push(5);
    }

alerta(){
  alert("alerta!!")
}

}
