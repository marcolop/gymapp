import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {


   mutantes:any[] = [

     {
     	nombre:"Marco",
     },
     {
     	nombre:"JACOBO"
     },
     {
       nombre: "marta"
     }

   ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
