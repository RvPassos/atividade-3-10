import { Component, Inject, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-livrosdetails',
  templateUrl: './livrosdetails.component.html',
  styleUrls: ['./livrosdetails.component.scss']
})
export class LivrosdetailsComponent {

  roteador = inject(ActivatedRoute)
  
  constructor(){
    let id = this.roteador.snapshot.paramMap.get('id')
  
  }

}
