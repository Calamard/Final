import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Service/Login.service';
import { Router } from '@angular/router';

@Component({

  selector: 'app-sigin-up',
  templateUrl: './sigin-up.component.html',
  styleUrls: ['./sigin-up.component.css']
  
})

export class SiginUpComponent implements OnInit {

  nam:string;
  last:string;
  rut:string;
  genre:string;
  age:number;
  email:string;
  password:string;
  country:string;
  
  constructor(
    private router:Router,
    private loginServices:LoginService) { }

  ngOnInit() {
  }

  nameeKeyup(value:string) {
    this.nam = value;
  }
  lastKeyup(value:string) {
    this.last = value;
  }
  rutKeyup(value:string) {
    this.rut = value;
  }
  genreKeyup(value:string) {
    this.genre = value;
  }
  ageKeyup(value:number) {
    this.age = value;
  }
  emailKeyup(value:string) {
    this.email = value;
  }
  passKeyup(value:string) {
    this.password = value;
  }
  countryKeyup(value:string) {
    this.country = value;
  }
  

  creatteUser(){

    let obs =  this.loginServices.create(this.age,this.country, this.email,this.genre , this.last, this.nam, this.password, this.rut);
    obs.subscribe(validation  => {
      if(validation) {
        alert('login successful')
        this.router.navigate(['/login']);
      } else {
        alert('error')
      }
    });

    
  }

}
