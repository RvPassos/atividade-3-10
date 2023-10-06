import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from '../pessoa';
import { PessoaServiceService } from '../pessoa-service.service';

@Component({
  selector: 'app-pessoasdetails',
  templateUrl: './pessoasdetails.component.html',
  styleUrls: ['./pessoasdetails.component.scss']
})
export class PessoasdetailsComponent implements OnInit{

  @Output() retorno = new EventEmitter<Pessoa>(); 
  @Input() pessoa: Pessoa = new Pessoa(0, "", 0);

  router = inject(ActivatedRoute);
  bd = inject(PessoaServiceService);

  constructor(){
    let id = this.router.snapshot.paramMap.get('id');

    if (id){
      this.pessoa = this.bd.getId(+id);
    }
  }

  ngOnInit(): void{
    this.pessoa = Object.assign({}, this.pessoa);
  }

  addEmitLista(){
    this.retorno.emit(this.pessoa);
  }

}
