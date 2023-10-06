import { Component, EventEmitter, Inject, Input, OnInit, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livros } from '../livros';
import { LivroServiceService } from '../livro-service.service';
import { Pessoa } from 'src/app/pessoas/pessoa';

@Component({
  selector: 'app-livrosdetails',
  templateUrl: './livrosdetails.component.html',
  styleUrls: ['./livrosdetails.component.scss']
})
export class LivrosdetailsComponent implements OnInit{

  @Output() retorno = new EventEmitter<Livros>();
  @Input() livro: Livros = new Livros(0, "", "")

  roteador = inject(ActivatedRoute);
  bd = inject(LivroServiceService);
  
  constructor(){
    let id = this.roteador.snapshot.paramMap.get('id')
    
    if(id){
      this.livro = this.bd.getId(+id);
    }
  }

  ngOnInit(): void{
    this.livro = Object.assign({}, this.livro);
  }

  addEmitLista(){
    this.retorno.emit(this.livro);
  }
}
