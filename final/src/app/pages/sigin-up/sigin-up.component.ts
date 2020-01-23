import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Service/login.service';

@Component({

  selector: 'app-sigin-up',
  templateUrl: './sigin-up.component.html',
  styleUrls: ['./sigin-up.component.css']
  
})

export class SiginUpComponent implements OnInit {
  name: string;
  last:string;
  rut:string;
  genre:string;
  age:number;
  type:string;
  email:string;
  password:string;
  country:string;
  
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  creatteUser(){
    this.loginService.login(this.name, this.last, this.rut, this.genre ,this.age, this.type, this.email,this.password, this.country).subscribe(
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
