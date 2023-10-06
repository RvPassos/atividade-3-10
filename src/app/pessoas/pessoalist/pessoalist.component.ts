import { Component, inject } from '@angular/core';
import { Pessoa } from '../pessoa';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PessoaServiceService } from '../pessoa-service.service';


@Component({
  selector: 'app-pessoalist',
  templateUrl: './pessoalist.component.html',
  styleUrls: ['./pessoalist.component.scss']
})
export class PessoalistComponent {

  lista: Pessoa[] = [];

  modalService = inject(NgbModal);
  bd = inject(PessoaServiceService);

  pessoaSelecionada!: Pessoa;
  indiceSelect!: number;

  constructor(){
    this.lista = this.bd.lista;
  }

  abrirModal(content: any){
    this.pessoaSelecionada = new Pessoa(0, "", 0);
    this.modalService.open(content, { size: 'lg'});
  }

  abrirModalEditar(editar:any, pessoa:Pessoa, indice:number){
    this.indiceSelect = indice;
    this.pessoaSelecionada = pessoa;
    this.modalService.open(editar, {size: 'lg'});
  }

  addLista(pessoa: Pessoa){

    if(pessoa.id > 0){
      this.lista[this.indiceSelect] = pessoa;
    } else {
      this.adicionarPessoa(pessoa.nome, pessoa.idade);

    }
    this.modalService.dismissAll();
  }

  adicionarPessoa(nome: string, idade: number){
    this.bd.adicionarPessoa(nome, idade);
  }

}
