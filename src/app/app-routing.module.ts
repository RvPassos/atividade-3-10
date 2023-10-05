import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './sistema/login/login.component';
import { IndexComponent } from './layout/index/index.component';
import { PessoalistComponent } from './pessoas/pessoalist/pessoalist.component';
import { PessoasdetailsComponent } from './pessoas/pessoasdetails/pessoasdetails.component';
import { CarroslistComponent } from './carros/carroslist/carroslist.component';
import { CarrosdetailsComponent } from './carros/carrosdetails/carrosdetails.component';
import { LivroslistComponent } from './livros/livroslist/livroslist.component';
import { LivrosdetailsComponent } from './livros/livrosdetails/livrosdetails.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: 'full'},
  { path: "login", component: LoginComponent},
  { path: "admin", component: IndexComponent, children: [
    { path: "pessoas", component: PessoalistComponent},
    { path: "pessoas/novo", component: PessoasdetailsComponent},
    { path: "pessoas/editar/:id", component: PessoasdetailsComponent},
    { path: "carros", component: CarroslistComponent},
    { path: "carros/novo", component: CarrosdetailsComponent},
    { path: "carros/editar/:id", component: CarrosdetailsComponent},
    { path: "livros", component: LivroslistComponent},
    { path: "livros/novo", component: LivrosdetailsComponent},
    { path: "livros/editar/:id", component: LivrosdetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
