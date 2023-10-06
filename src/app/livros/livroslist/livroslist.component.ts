import { Component, inject } from '@angular/core';
import { Livros } from '../livros';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LivroServiceService } from '../livro-service.service';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {

  lista: Livros[] = [];

  modalService = inject(NgbModal);
  bd = inject(LivroServiceService);

  livroSelecionado!: Livros;
  indiceSelect!: number;

  constructor(){
    this.lista = this.bd.lista;
  }

  abrirModal(content: any){
    this.livroSelecionado = new Livros(0, "", "");
    this.modalService.open(content, { size: 'lg'});
  }

  abrirModalEditar(editar:any, livro: Livros, indice: number){
    this.indiceSelect = indice;
    this.livroSelecionado = livro;
    this.modalService.open(editar, {size: 'lg'});
  }

  addLista(livro: Livros){
    
    if(livro.id > 0){
      this.lista[this.indiceSelect] = livro;
    } else {
      this.adicionarLivro(livro.autor, livro.titulo);
    }
    this.modalService.dismissAll();
  }

  adicionarLivro(autor: string, titulo: string){
    this.bd.adicionarLivro(autor, titulo);
  }

}
