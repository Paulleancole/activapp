import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera } from 'ionic-native';

/*
  Generated class for the miUsuario page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-miUsuario',
  templateUrl: 'miUsuario.html'
})
export class miUsuarioPage {

  //isDisabled: boolean = false;
  fotoPerfil: string = "src/assets/images/Foto de perfil 4.jpeg";
  datosUsuario: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    //document.getElementById("editBtn").onclick = function ()
    //{
    //  this.isDisabled = !this.isDisabled;
    //}

    this.datosUsuario.push({
      Campo: 'Nickname',
      Dato: 'Juanc1t0x'
    });
    this.datosUsuario.push({
      Campo: 'Nombre',
      Dato: 'Juan rodriguez'
    });
    this.datosUsuario.push({
      Campo: 'Fecha de nacimiento',
      Dato: '11/6/1992'
    });
    this.datosUsuario.push({
      Campo: 'Altura',
      Dato: '1,85m'
    });
    this.datosUsuario.push({
      Campo: 'Mail',
      Dato: 'Juancit0_110@hotmail.com'
    });
    this.datosUsuario.push({
      Campo: 'Sexo',
      Dato: 'Masculino'
    });


  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad miUsuarioPage');
  }

}
