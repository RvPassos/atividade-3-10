import { Component } from '@angular/core';
import { Livros } from '../livros';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {

  lista: Livros[] = [];

  constructor(){
    
    let livro1: Livros = new Livros();
    livro1.id = 1
    livro1.autor = "Antoine"
    livro1.titulo = "Pequeno principe"

    let livro2: Livros = new Livros();
    livro2.id = 2
    livro2.autor = "Nietzsche"
    livro2.titulo = "Assim falou zaratustra"

    let livro3: Livros = new Livros();
    livro3.id = 3
    livro3.autor = "Shakespeare"
    livro3.titulo = "Romeu e Julieta"


    let livro4: Livros = new Livros();
    livro4.id = 4
    livro4.autor = "Pedro Henrique"
    livro4.titulo = "é tamo junto"


    this.lista.push(livro1);
    this.lista.push(livro2);
    this.lista.push(livro3);
    this.lista.push(livro4);


  }

}
