import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { InputTextModule } from 'primeng-lts/inputtext';
import { ButtonModule } from 'primeng-lts/button';
import { TableModule } from 'primeng-lts/table';
import { TooltipModule } from 'primeng-lts/tooltip';
import { LancamentoPesquisaComponent } from './lancamento-pesquisa/lancamento-pesquisa.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PessoaPesquisaComponent } from './pessoa-pesquisa/pessoa-pesquisa.component';

@NgModule({
  declarations: [
    AppComponent,
    LancamentoPesquisaComponent,
    NavbarComponent,
    PessoaPesquisaComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
