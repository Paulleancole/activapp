import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

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

import { serviceActivapp } from '../providers/serviceActivapp';

@NgModule({
  declarations: [
    MyApp,
    inicioPage,
    albumPage,
    miUsuarioPage,
    encuestasPage,
    fotosPage,
    lectorQRPage,
    logrosPage,
    misPuntosPage,
    albumDetallePage,
    rankingPage
    ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    inicioPage,
    albumPage,
    miUsuarioPage,
    encuestasPage,
    fotosPage,
    lectorQRPage,
    logrosPage,
    misPuntosPage,
    albumDetallePage,
    rankingPage
  ],
  providers: [
    serviceActivapp, { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule {}
