import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../model/Login';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
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
  
  public login (name:string , last:string, rut:string,genre:string,age:number,type:string,email:string,password:string, country:string){
      let body ={
        nameDto:name,
        lastNameDto:last,
        rutDto:rut,
        genreDto:genre,
        ageDto:age,
        typeDto:type,

        emailDto:email,
        passwordDto:password,

        contryDto:country,
        
         
      }
      return this.http.POST("http://localhost:8090/swagger-ui.html#/login-controller/crearUsuaioUsingPOST",body,this.headersOptions)
  }
}

