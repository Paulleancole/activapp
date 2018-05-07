import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { serviceActivapp } from '../../providers/serviceActivapp';
import { AlertController, LoadingController, Platform } from 'ionic-angular';

@Component({
    selector: 'page-misPuntos',
    templateUrl: 'misPuntos.html'
})
export class misPuntosPage {

  acciones_items: Array<any> = [];
  meses_items: Array<Array<any>> = [];

  imgCopa: string = "src/assets/images/s8l43ELwTZ2heUtyHQEW_trofeo.jpg";
  misPuntos: string = "Tienes 700 puntos!";
  ranking: string = "Estás en el puesto 145";


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public serviceActivapp: serviceActivapp,
    public platform: Platform) {   
   
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
      content: "Obteniendo puntos..."
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

          //Recorro las acciones
          let mesAnterior = "";
          let mesActual: Array<any> = [];

          for (let i = 0; i < this.acciones_items.length; i++) {
            
            //La primera vez tengo que hacer esto
            console.log(i + "-1:" +mesAnterior);
            if (mesAnterior == "") {
              mesAnterior = this.acciones_items[i].fechaAccion.substring(0, 7);
            }
            console.log(i + "-2:" + mesAnterior);

            //Veo si sigo en el mismo mes
            if (mesAnterior != this.acciones_items[i].fechaAccion.substring(0, 7)) {

              //Creo el mes
              this.meses_items.push(mesActual);

              //Tomo el anterior y limpio
              mesAnterior = this.acciones_items[i].fechaAccion.substring(0, 7);
              mesActual = [];
            }
            
            //En mes actual sumo la accion actual
            mesActual.push(this.acciones_items[i]);
            
          }

          //Ultimo mes
          this.meses_items.push(mesActual);


          mesActual = [];

        } else {
          //This really should never happen
          console.error('Error obteniendo puntos');
        }

      },
      error => {

        //Hide the loading indicator
        loader.dismiss();
        console.error('Error al obtener los puntos');
        console.dir(error);
        // this.showAlert(error);
      }
    );
  }

  private formatAccion(data): any {

    let tmpArray = [];

    //Veo si encontro algun registro
    if (data.records) {

      //Accion
      //create a blank array to hold our results      
      for (let i = 0; i < data.records.length; i++) {  //How to properly iterate here!!      
        tmpArray.push({
          'fechaAccion': data.records[i].fechaAccion,
          'mesDia': data.records[i].fechaAccion.substring(8, 10)+"/"+data.records[i].fechaAccion.substring(5, 7),
          'nombreAccion': data.records[i].nombreAccion,
          'idSticker': data.records[i].idSticker,
          'puntos': data.records[i].puntos
        });
      }
    };

    //Return the new array to the calling function
    return tmpArray;
  }

  private mostrarMes(mesActual): any { 
    
    var month = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    var b = month[mesActual - 1];
    return b;
}







}
