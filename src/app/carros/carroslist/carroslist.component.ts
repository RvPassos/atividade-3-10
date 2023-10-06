import { Component, inject } from '@angular/core';
import { Carro } from '../carros';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Livros } from 'src/app/livros/livros';
import { CarroServiceService } from '../carro-service.service';

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent {

  lista: Carro[] = [];

  modalService = inject(NgbModal);
  bd = inject(CarroServiceService);

  carroSelecionado!: Carro;
  indiceSelect!: number;

  constructor(){
    this.lista = this.bd.lista;
  }

  abrirModal(content: any){
    this.modalService.open(content, { size: 'lg'})
  }

  abrirModalEditar(editar:any, carro:Carro, indice:number){
    this.indiceSelect = indice;
    this.carroSelecionado = carro;
    this.modalService.open(editar, {size: 'lg'})
  }

  addLista(carro: Carro){
    if(carro.id > 0){
      this.lista[this.indiceSelect] = carro;
    } else {
      this.adicionarCarro(carro.nome, carro.ano);
    }
    this.modalService.dismissAll();
  }

  adicionarCarro(nome:string, ano:number){
    this.bd.adicionarPessoa(nome, ano);
  }

}
