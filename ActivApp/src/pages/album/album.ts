import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { serviceActivapp } from '../../providers/serviceActivapp';
import { AlertController, LoadingController, Platform } from 'ionic-angular';

@Component({
    selector: 'page-album',
  templateUrl: 'album.html'
})
export class albumPage {

  actividades_items: Array<any> = [];
  paul_items: Array<number> = [];
  lista_items: Array<number> =[];
  images: Array<any> = [];
  grid: Array<Array<string>>; //array of arrays


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public serviceActivapp: serviceActivapp,
    public platform: Platform) {

  }

    ionViewDidLoad() {
      console.log('ionViewDidLoad albumPage');

      this.platform.ready().then(() => {

        //Setup a resume event listener
        document.addEventListener('resume', () => {
          //Get the local weather when the app resumes
          this.mostraralbum();
        });

        //Populate the form with the current location data
        this.mostraralbum();
      });

      
      }


  mostraralbum() {
    
    //clear out the previous array contents
    this.actividades_items = [];
    this.grid = [];

    //Create the loading indicator
    let loader = this.loadingCtrl.create({
      content: "Obteniendo actividades..."
    });

    //Show the loading indicator    
    loader.present();


    this.serviceActivapp.album(1).then(
      data => {

        //Hide the loading indicator
        loader.dismiss();

        //Now, populate the array with data from the weather service
        if (data) {
          //We have data, so lets do something with it
          this.actividades_items = this.formatActividades(data);

          //Cantidad de filas          
          let cantidadItems= Math.ceil(this.actividades_items.length / 2);
          this.lista_items = Array(cantidadItems);

          //let rowNum = 0; //counter to iterate over the rows in the grid
          for (let i = 0; i < cantidadItems; i++) { //iterate images
            this.lista_items[i] = (i * 2);
          }
        }          
                  
      },
      error => {

        //Hide the loading indicator
        loader.dismiss();
        console.error('Error al obtener los servicios');
        console.dir(error);
       // this.showAlert(error);
      }
    );
  }

  private formatActividades(data): any {

    let tmpArray = [];

    //Veo si encontro algun registro
    if (data.records) {

      //Accion
      //create a blank array to hold our results      
      for (let i = 0; i < data.records.length; i++) {  //How to properly iterate here!!      

        tmpArray.push({
          'idActividad': data.records[i].idActividad,
          'nombreActividad': data.records[i].nombreActividad,
          'idSticker': data.records[i].idSticker,
          'puntos': data.records[i].puntos,
          'archivo': data.records[i].archivo
        });
      }
    };

    //Return the new array to the calling function
    return tmpArray;
  }
 }







    //  let rowNum = 0; //counter to iterate over the rows in the grid

    //  for (let i = 0; i < this.images.length; i += 2) { //iterate images

    //    this.grid[rowNum] = Array(2); //declare two elements per row

    //    if (this.images[i]) { //check file URI exists
    //      this.grid[rowNum][0] = this.images[i] //insert image
    //    }

    //    if (this.images[i + 1]) { //repeat for the second image
    //      this.grid[rowNum][1] = this.images[i + 1]
    //    }

    //    rowNum++; //go on to the next row
    //  }

    //}
