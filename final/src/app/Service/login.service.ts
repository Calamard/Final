import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';





@Injectable({
  providedIn: 'root'
})

export class LoginService{
  private headersOptions = {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, HEAD, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type, Accept, X-Requested-With, remember-me'
    }
  };
  constructor(private http:HttpClient) { }
  
  public create (age:number, country:string, email:string, genre:string, last:string, nam:string ,password:string, rut:string ){
      let body ={
        "ageDto":age,
        "countryDto":country,
        "emailDto":email,
        "genreDto":genre,
        "lastNameDto":last,
        "nameDto":nam,
        "passwordDto":password,
        "rutDto":rut
      }
      return this.http.post("http://localhost:8090/api/v2/login/create",body,this.headersOptions)
  }
}

