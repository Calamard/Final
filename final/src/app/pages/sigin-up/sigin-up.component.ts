import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Service/login.service';

@Component({

  selector: 'app-sigin-up',
  templateUrl: './sigin-up.component.html',
  styleUrls: ['./sigin-up.component.css']
  
})

export class SiginUpComponent implements OnInit {
  name:string;
  last:string;
  rut:string;
  genre:string;
  age:number;
  email:string;
  password:string;
  country:string;
  
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  nameeKeyup(value:string) {
    this.name = value;
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
    this.loginService.create (this.age,this.country, this.email,this.genre , this.last, this.name, this.password, this.rut).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error)
        alert(error)
      }
    )
  }

}
