import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { serviceActivapp } from '../../providers/serviceActivapp';
import { AlertController, LoadingController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class inicioPage {

  git = "";
  imgCopa: string = "src/assets/images/s8l43ELwTZ2heUtyHQEW_trofeo.jpg";
  headerMisPuntos: string = "Tienes 700 puntos!"
  ranking: string = "Estás en el puesto 145"
  ultimosLogrosConseguidos: string = "Últimos logros conseguidos"
  proximosEventos: string = "Próximos eventos"

  logros_items: Array<any> = [];
  proximosEventos_items: Array<any> = [];
  frase: string = "Frase del día"
  fraseMotivacional: string = "'Cuanto más practico, más suerte tengo' Gary Player"

  //agregados recien
  acciones_items: Array<any> = [];
  meses_items: Array<Array<any>> = [];



  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public serviceActivapp: serviceActivapp,
    public platform: Platform) {   

    this.logros_items.push({
      Logro: 'Fotosafari 1',
      Fecha: '10/10',
      Puntos: 50
    });
    this.logros_items.push({
      Logro: 'Fotosafari 2  ',
      Fecha: '20/10',
      Puntos: 30
    });
    this.logros_items.push({
      Logro: 'Solicitud Plan de Nutrición',
      Fecha: '10/11',
      Puntos: 40
    });

    this.proximosEventos_items.push({
      Logro: 'Charla Nutrición',
      Fecha: '03/12',
      Puntos: 50
    });

    this.proximosEventos_items.push({
      Logro: 'Bicicleteada familiar',
      Fecha: '08/12',
      Puntos: 80
    });

    this.proximosEventos_items.push({
      Logro: 'Maratón',
      Fecha: '12/12',
      Puntos: 60
    });

    }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad misPuntosPage');

    this.platform.ready().then(() => {

      //Setup a resume event listener
      document.addEventListener('resume', () => {
        //Get the local weather when the app resumes
        this.mostrarDetallePuntos();
      });

      //Populate the form with the current location data
      this.mostrarDetallePuntos();
    });

  }

  mostrarDetallePuntos() {

    //clear out the previous array contents
    this.meses_items = [];
    this.acciones_items = [];

    //Create the loading indicator
    let loader = this.loadingCtrl.create({
      content: "Obteniendo información..."
    });

    //Show the loading indicator    
    loader.present();


    this.serviceActivapp.mispuntos(1).then(
      data => {

        //Hide the loading indicator
        loader.dismiss();

        //Now, populate the array with data from the weather service
        if (data) {

          //We have data, so lets do something with it
          this.acciones_items = this.formatAccion(data);       
          
        } else {
          //This really should never happen
          console.error('Error al obtener los logros');
        }

      },
      error => {

        //Hide the loading indicator
        loader.dismiss();
        console.error('Error al obtener los últimos logros');
        console.dir(error);
        // this.showAlert(error);
      }
    );
  }

  private formatAccion(data): any {

    let tmpArray = [];

    //Veo si encontro algun registro
    if (data.acciones) {

      //Accion
      //create a blank array to hold our results      
      for (let i = 0; i < data.acciones.length; i++) {  //How to properly iterate here!!      
        tmpArray.push({
          'fechaAccion': data.records[i].fechaAccion,
          'mesDia': data.records[i].fechaAccion.substring(8, 10) + "/" + data.records[i].fechaAccion.substring(5, 7),
          'nombreAccion': data.records[i].nombreAccion,
          'idSticker': data.records[i].idSticker,
          'puntos': data.records[i].puntos
        });
      }
    };

    //Return the new array to the calling function
    return tmpArray;
  }

    
    onLink(url: string) {
        window.open(url);
    }
}





