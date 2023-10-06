import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { Carro } from '../carros';
import { ActivatedRoute } from '@angular/router';
import { CarroServiceService } from '../carro-service.service';

@Component({
  selector: 'app-carrosdetails',
  templateUrl: './carrosdetails.component.html',
  styleUrls: ['./carrosdetails.component.scss']
})
export class CarrosdetailsComponent implements OnInit{

  @Output() retorno = new EventEmitter<Carro>();
  @Input() carro: Carro = new Carro(0, "", 0);

  router = inject(ActivatedRoute);
  bd = inject(CarroServiceService);

  constructor(){
    let id = this.router.snapshot.paramMap.get('id');

    if(id){
      this.carro = this.bd.getId(+id)
    }
  }

  ngOnInit(): void{
    this.carro = Object.assign({}, this.carro)
  }

  addEmitLista(){
    this.retorno.emit(this.carro);
  }
}
