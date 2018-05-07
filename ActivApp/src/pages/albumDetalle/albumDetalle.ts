import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { serviceActivapp } from '../../providers/serviceActivapp';
import { AlertController, LoadingController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-albumDetalle',
  templateUrl: 'albumDetalle.html'
})
export class albumDetallePage {

  acciones_items: Array<any> = [];

  images: Array<any> = [];
  grid: Array<Array<any>>; //array of arrays



  //constructor(public navCtrl: NavController,
  //  public navParams: NavParams,
  //  public loadingCtrl: LoadingController,
  //  public serviceActivapp: serviceActivapp,
  //  public platform: Platform) {

  //}

  //ionViewDidLoad() {
  //  console.log('ionViewDidLoad albumAccionesPage');

  //  this.platform.ready().then(() => {

  //    //Setup a resume event listener
  //    document.addEventListener('resume', () => {
  //      //Get the local weather when the app resumes
  //      this.mostrarAlbumDetalle();
  //    });

  //    //Populate the form with the current location data
  //    this.mostrarAlbumDetalle();
  //  });

  //  }


  //mostrarAlbumDetalle() {

  //  //clear out the previous array contents
  //  this.acciones_items = [];
  //  this.grid = [];

  //  //Create the loading indicator
  //  let loader = this.loadingCtrl.create({
  //    content: "Obteniendo acciones..."
  //  });

  //  //Show the loading indicator    
  //  loader.present();

  //    //albumDetalle(1, navParams.data.ActividadID);
  //  this.serviceActivapp.albumDetalle(1, this.navParams.data.ActividadID).then(
  //    data => {

  //      //Hide the loading indicator
  //      loader.dismiss();

  //      //Now, populate the array with data from the weather service
  //      if (data) {
  //        //We have data, so lets do something with it
  //        this.acciones_items = this.formatAcciones(data);

  //        this.grid = Array(Math.ceil(this.acciones_items.length / 2)); //MATHS!

  //        let rowNum = 0; //counter to iterate over the rows in the grid

  //        for (let i = 0; i < this.acciones_items.length; i += 2) { //iterate images

  //          this.grid[rowNum] = Array(2); //declare two elements per row

  //          if (this.acciones_items[i]) { //check file URI exists
  //            this.grid[rowNum][0] = this.acciones_items[i] //insert image
  //          }

  //          if (this.acciones_items[i + 1]) { //repeat for the second image
  //            this.grid[rowNum][1] = this.acciones_items[i + 1]
  //          }

  //          rowNum++; //go on to the next row
  //        }

  //      } else {
  //        //This really should never happen
  //        console.error('Error obteniendo servicios');
  //      }

  //    },
  //    error => {

  //      //Hide the loading indicator
  //      loader.dismiss();
  //      console.error('Error al obtener los servicios');
  //      console.dir(error);
  //      // this.showAlert(error);
  //    }
  //  );
  //}

  //private formatAcciones(data): any {

  //  let tmpArray = [];

  //  //Veo si encontro algun registro
  //  if (data.records) {

  //    //Accion
  //    //create a blank array to hold our results      
  //    for (let i = 0; i < data.records.length; i++) {  //How to properly iterate here!!      

  //      tmpArray.push({
  //        'idAccion': data.records[i].idAccion,
  //        'nombreAccion': data.records[i].nombreAccion,
  //        'idSticker': data.records[i].idSticker,
  //        'puntos': data.records[i].puntos,
  //        'fechaAccion': data.records[i].fechaAccion,
  //      });
  //    }
  //  };

  //  //Return the new array to the calling function
  //  return tmpArray;
  //}
}
