import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  
  public login (name:string , lastNameDto:string,){
      let body ={
        nameDto = name;
        lastNameDto = sdf;
        rutDto = 
        ageDto;
        genreDto;
        emailDto;
        passwordDto;
        countryDto;
        typeDto;
      }
      return this.http.POST<User>("localhost:",body,this.headersOptions)
  }
}
