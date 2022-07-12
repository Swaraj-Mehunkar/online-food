import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../Interface/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getData():Observable<IProduct[]>{
    let url="https://localhost:44343/api/famousdish";
    console.log("Done");
    return this.http.get<IProduct[]>(url);     
  }

}
