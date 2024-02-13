import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoServicesService {

  constructor(private _http:HttpClient) { }

  getUserData(){
    return this._http.get('https://dummyjson.com/users')
  }
}
