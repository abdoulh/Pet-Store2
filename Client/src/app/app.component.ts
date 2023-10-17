import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';


@Injectable({
  providedIn:'root'
})

export class AppComponent {
  constructor (private _http:HttpClient) { }

  getdata(){
    return this._http.get('http://localhost:4200/api/product')
  }
}


