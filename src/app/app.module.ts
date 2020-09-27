import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { InputTextModule } from 'primeng-lts/inputtext';
import { ButtonModule } from 'primeng-lts/button';
import { TableModule } from 'primeng-lts/table';
import { TooltipModule } from 'primeng-lts/tooltip';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PesquisaComponent,
    NavbarComponent
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
