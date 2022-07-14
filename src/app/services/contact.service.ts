import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IContact } from '../Interface/icontact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  addcontact(contact:IContact){
    this.http.post<IContact[]>("https://localhost:44343/api/contact",contact,{
    headers:{
      "Access-Control-Allow-Origin":"*"
    } 
}).subscribe(result=>console.log("Data send to Database"));

}

}
