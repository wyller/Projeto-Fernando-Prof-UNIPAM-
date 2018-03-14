import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

/*
  Generated class for the ListaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListaProvider {

  constructor(public http: Http,
    public RequestOptions : RequestOptions) {
    console.log('Hello ListaProvider Provider');
  }

  usuario:string = '';
  urlGet:string  = 'http://ws.unipam.edu.br/servicoportalaula/api/portalaluno/alunodisciplina';
  urlPost:string = 'http://ws.unipam.edu.br/servicoportalaula/api/portalaluno/alunodisciplinapost';
  
  getDisciplina () {
    return new Promise ((resolve, reject) => {
      let headers = new Headers()
      headers.append('Content-type', 'application/json')
      this.http.get(this.urlGet, {headers : headers})
      .subscribe((res) => {
        console.log('1324')
        let data = res.json()
        resolve(data)
      },
    (err) => {
      reject(err)
    })
    })
  };
}
