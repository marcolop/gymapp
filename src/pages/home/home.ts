import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';
// import { ANIMALES } from '../../data/data.animales';
import { EJERCICIOS } from '../../data/data.exercises';
import { Ejercicios } from '../../interfaces/ejercicios.interface';

// import { Refresher,Reorder } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
 export class HomePage {

    animales:Ejercicios[] = [];

    constructor() {
      this.animales = EJERCICIOS.splice(0);
    }
}
