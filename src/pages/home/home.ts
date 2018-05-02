import { Component } from '@angular/core';
import { EJERCICIOS } from '../../data/data.exercises';
import { Ejercicios } from '../../interfaces/ejercicios.interface';
import { Refresher } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
 export class HomePage {

    animales:Ejercicios[] = [];

    constructor() {
       this.animales = EJERCICIOS.slice(0);
    }

    // recarga de ejercios cuando se actualizan nuevos
    recargar_ejercicios( refresher:Refresher) {
       console.log('inicio del refresh');
       setTimeout( () => {
           console.log('termino el refresh');
            this.animales = EJERCICIOS.slice(0);
            refresher.complete();
     },1500)
   }
}
