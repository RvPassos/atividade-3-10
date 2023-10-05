import { Component } from '@angular/core';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoalist',
  templateUrl: './pessoalist.component.html',
  styleUrls: ['./pessoalist.component.scss']
})
export class PessoalistComponent {

  lista: Pessoa[] = [];

  constructor(){

    let pessoa1: Pessoa = new Pessoa();
    pessoa1.id = 1;
    pessoa1.nome = "Chris";
    pessoa1.idade = 47;

    let pessoa2: Pessoa = new Pessoa();
    pessoa2.id = 2;
    pessoa2.nome = "Andre";
    pessoa2.idade = 18;

    let pessoa3: Pessoa = new Pessoa();
    pessoa3.id = 3;
    pessoa3.nome = "Luiz";
    pessoa3.idade = 25;

    let pessoa4: Pessoa = new Pessoa();
    pessoa4.id = 4;
    pessoa4.nome = "Matheus";
    pessoa4.idade = 25;

    let pessoa5: Pessoa = new Pessoa();
    pessoa5.id = 5;
    pessoa5.nome = "Roberto";
    pessoa5.idade = 54;

    let pessoa6: Pessoa = new Pessoa();
    pessoa6.id = 6;
    pessoa6.nome = "Carolina";
    pessoa6.idade = 42;

    let pessoa7: Pessoa = new Pessoa();
    pessoa7.id = 7;
    pessoa7.nome = "Jose";
    pessoa7.idade = 46;

    let pessoa8: Pessoa = new Pessoa();
    pessoa8.id = 8;
    pessoa8.nome = "Maria";
    pessoa8.idade = 20;

    let pessoa9: Pessoa = new Pessoa();
    pessoa9.id = 9;
    pessoa9.nome = "Nathalia";
    pessoa9.idade = 21;

    let pessoa10: Pessoa = new Pessoa();
    pessoa10.id = 10;
    pessoa10.nome = "Emilio";
    pessoa10.idade = 19;

    this.lista.push(pessoa1);
    this.lista.push(pessoa2);
    this.lista.push(pessoa3);
    this.lista.push(pessoa4);
    this.lista.push(pessoa5);
    this.lista.push(pessoa6);
    this.lista.push(pessoa7);
    this.lista.push(pessoa8);
    this.lista.push(pessoa9);
    this.lista.push(pessoa10);

  }

}
