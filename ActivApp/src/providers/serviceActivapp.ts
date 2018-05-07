import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, RequestOptionsArgs, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the servicios provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class serviceActivapp {
  private servicioEndpoint = 'http://www.ayresit.com.ar/apis/appactivapp/api/servicios';

  constructor(public http: Http) {
    console.log('Hello servicios Provider');
  }

  album($idUsuario): Promise<any> {
    let url: string = this.servicioEndpoint + '/album.php';

    //let body = new FormData();
    //body.append('token', localStorage.getItem("token"));

    let body = new FormData();
    body.append('usuario', $idUsuario);

    return this.http.post(url, body)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  inicio($idUsuario): Promise<any> {
    let url: string = this.servicioEndpoint + '/mispuntos.php';

    //let body = new FormData();
    //body.append('token', localStorage.getItem("token"));

    let body = new FormData();
    body.append('usuario', $idUsuario);

    return this.http.post(url, body)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  albumDetalle($idUsuario, $idActividad): Promise<any> {
    let url: string = this.servicioEndpoint + '/albumdetalle.php';

    //let body = new FormData();
    //body.append('token', localStorage.getItem("token"));

    let body = new FormData();
    body.append('usuario', $idUsuario);
    body.append('idactividad', $idActividad);

    return this.http.post(url, body)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }
  
  mispuntos($idUsuario): Promise<any> {
    let url: string = this.servicioEndpoint + '/mispuntos.php';

    //let body = new FormData();
    //body.append('token', localStorage.getItem("token"));

    let body = new FormData();
    body.append('usuario', $idUsuario);

    return this.http.post(url, body)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }


  //'Borrowed' from //https://angular.io/docs/ts/latest/guide/server-communication.html
  private extractData(res: Response) {
    //Convert the response to JSON format
    let body = res.json();
    //Return the data (or nothing)
    return body || {};
  }

  //'Borrowed' from //https://angular.io/docs/ts/latest/guide/server-communication.html
  private handleError(res: Response | any) {
    console.error('Entering handleError');
    console.dir(res);
    return Promise.reject(res.message || res);
  }

}
