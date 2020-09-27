import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{
  mostrar = true;

  mostrarMenu(){
    if(this.mostrar == true){
      this.mostrar=false;
    }
    else{
      this.mostrar=true;
    }
  }
}
