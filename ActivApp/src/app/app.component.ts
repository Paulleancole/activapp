import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { inicioPage } from '../pages/inicio/inicio';
import { albumPage } from '../pages/album/album';
import { miUsuarioPage } from '../pages/miUsuario/miUsuario';
import { encuestasPage } from '../pages/encuestas/encuestas';
import { fotosPage } from '../pages/fotos/fotos';
import { lectorQRPage } from '../pages/lectorQR/lectorQR';
import { logrosPage } from '../pages/logros/logros';
import { misPuntosPage } from '../pages/misPuntos/misPuntos';
import { albumDetallePage } from '../pages/albumDetalle/albumDetalle';
import { rankingPage } from '../pages/ranking/ranking';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = misPuntosPage;  //inicioPage;

  pages: Array<{ title: string, component: any }>;

  menu: Array<{title: string, component: any, subitems: Array<{ title: string, component: any }> }>;
  shownGroup: any;


    constructor(public platform: Platform) {
    this.initializeApp();
  
    // used for an example of ngFor and navigation
    //this.pages = [
    //  { title: 'Inicio', component: inicioPage},
    //  { title: 'Page Two', component: Page2},
    //  { title: 'Album', component: albumPage},
    //  { title: 'Mi Usuario', component: miUsuarioPage},
    //  { title: 'Seccion2', component: inicioPage }      
    //];
    
    //this.menu = [
    //  { title: 'Inicio', component: Inicio, subitems: null },
    //  { title: 'Page Two', component: Page2, subitems: null },

    //  {
    //    title: 'Album', component: null,
    //    subitems: [
    //      { title: 'Seccion1', component: Inicio },
    //      { title: 'Seccion2', component: Inicio }
    //    ]
    //  },
    //  {
    //    title: 'Album2', component: null,
    //    subitems: [
    //      { title: 'Seccion3', component: Inicio },
    //      { title: 'Seccion4', component: Inicio }
    //    ]
    //  },
    //];

    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page, params) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario    
    this.shownGroup = null;

    switch (page) {
      case 'Inicio':
      this.nav.setRoot(inicioPage);
      break;

      case 'album':
        this.nav.setRoot(albumPage);
        break;

      case 'Encuestas':
        this.nav.setRoot(encuestasPage);
        break;

      case 'Fotos':
        this.nav.setRoot(fotosPage);
        break;

      case 'Lector QR':
        this.nav.setRoot(lectorQRPage);
        break;

      case 'Logros':
        this.nav.setRoot(logrosPage);
        break;

      case 'Mis Puntos':
        this.nav.setRoot(misPuntosPage);
        break;

      case 'Album Acciones':
        this.nav.setRoot(albumDetallePage, params);
        break;

      case 'Ranking':
        this.nav.setRoot(rankingPage);
        break;

      case 'Mi Usuario':
        this.nav.setRoot(miUsuarioPage);
        break;

    }
     
  }

  showGroup(nroGrupo) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario

    //Veo si esta volviendo a clickear un grupo abierto
    if (this.shownGroup != nroGrupo) {
      //Abro el grupo
      this.shownGroup = nroGrupo;
    }
    else {
      //Cierro
      this.shownGroup = null;
    }
    
  }

  isGroupShown(nroGrupo) {
    return this.shownGroup === nroGrupo;
  }

}
