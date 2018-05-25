import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html'
})
export class Pagina2Page {

  personaje:any = {};

  constructor(public navPrms: NavParams) {

    this.personaje = this.navPrms.get("info");
    console.log(this.personaje);

  }

}
