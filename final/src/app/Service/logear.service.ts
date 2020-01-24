import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogearService {
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

  public entry(email:string, pass:string) {
    let body = {
      "emailD":email,
      "passD":pass
    }
    return this.http.post("http://localhost:8090/api/v2/login/session",body,this.headersOptions)
  }


}
