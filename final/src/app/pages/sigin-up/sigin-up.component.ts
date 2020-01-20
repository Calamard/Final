import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Service/login.service';

@Component({
  selector: 'app-sigin-up',
  templateUrl: './sigin-up.component.html',
  styleUrls: ['./sigin-up.component.css']
})
export class SiginUpComponent implements OnInit {
  name: string;
  
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  creatteUser(){
    this.loginService.login(this.name,).subscribe(
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
