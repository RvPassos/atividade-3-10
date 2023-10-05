import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './layout/index/index.component';
import { CarroslistComponent } from './carros/carroslist/carroslist.component';
import { FormsModule } from '@angular/forms';
import { PessoalistComponent } from './pessoas/pessoalist/pessoalist.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PessoasdetailsComponent } from './pessoas/pessoasdetails/pessoasdetails.component';
import { LoginComponent } from './sistema/login/login.component';
import { HeaderComponent } from './layout/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LivroslistComponent } from './livros/livroslist/livroslist.component';
import { LivrosdetailsComponent } from './livros/livrosdetails/livrosdetails.component';
import { CarrosdetailsComponent } from './carros/carrosdetails/carrosdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CarroslistComponent,
    PessoalistComponent,
    HeaderComponent,
    FooterComponent,
    PessoasdetailsComponent,
    LoginComponent,
    LivroslistComponent,
    LivrosdetailsComponent,
    CarrosdetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
