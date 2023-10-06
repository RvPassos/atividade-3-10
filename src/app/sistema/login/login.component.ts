import { Component, inject } from '@angular/core';
import { Usuario } from '../usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  usuario: Usuario = new Usuario();

  roteador = inject(Router);

  logar(){
    if(this.usuario.login == 'admin' && this.usuario.senha == 'admin'){
      this.roteador.navigate(['/admin'])
    }
    else{
      alert('usuario ou senha incorreto');
    }
  }

}
