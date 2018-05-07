import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ranking page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-ranking',
    templateUrl: 'ranking.html'
})
export class rankingPage {
  
  ranking_items: Array<any> = [];
  miRanking_items: Array<any> = [];
 
  constructor(public navCtrl: NavController) {

    this.ranking_items.push({
      Posicion: 1,
      Nombre: 'Matías Pérez',
      Puntos: 1800,
      Foto: "src/assets/images/Foto de perfil 8.jpeg"
    });
    this.ranking_items.push({
      Posicion: 2,
      Nombre: 'Pablo Martinez Runner Pro el mejor de todos',
      Puntos: 1250,
      Foto: "https://i2.wp.com/hsmai-europe.com/wp-content/uploads/2017/05/20160105-Travel-Tripper-0013.1-copy-1.jpg?resize=855%2C536"
    });
    this.ranking_items.push({
      Posicion: 3,
      Nombre: 'Mónica Santos',
      Puntos: 1130,
      Foto: "src/assets/images/Foto de perfil 4.jpeg"
    });

    this.ranking_items.push({
      Posicion: 4,
      Nombre: 'Adriana Rojas',
      Puntos: 980,
      Foto: "src/assets/images/Foto de perfil 5.jpeg"
    });

    this.ranking_items.push({
      Posicion: 5,
      Nombre: 'Federico Rossi',
      Puntos: 850,
      Foto: "src/assets/images/Foto de perfil 6.jpeg"
    });

    this.miRanking_items.push({
      Posicion: 6,
      Nombre: "Juan Molina",
      Puntos: 700,
      Foto: "src/assets/images/Foto de perfil.jpg"
    });
  }


}
