import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PERSONAJES } from "../../data/personajes.data";
import { Pagina2Page } from '../index.paginas';

@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html'
})
export class Tab1Page {

  //Variable (Arreglo) vacío. Es rellenado con la data importada
  rebeldes:any[] = PERSONAJES;

  constructor(public navCtrl: NavController) {

  }

  verDetalles(info:any){
    this.navCtrl.push(Pagina2Page, {info});
  }

}
