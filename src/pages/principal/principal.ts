import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pagina2Page } from '../index.paginas';

@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {


  constructor(public navCtrl: NavController) {}

  navegarPagina() {
  	 this.navCtrl.push( Pagina2Page );
  }
    
}
