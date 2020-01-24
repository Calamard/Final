import { Component, OnInit } from '@angular/core';
import { LogearService } from 'src/app/Service/logear.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  pass:string;

  constructor(
    private router:Router,
    private logearServices:LogearService) { }

  ngOnInit() {
  }

  emailKeyup(value:string) {
    this.email = value;
  }
  passKeyup(value:string) {
    this.pass = value;
  }

  validateSession(){
    let obs =  this.logearServices.entry(this.email, this.pass);
    obs.subscribe(validation  => {
      if(validation) {
        alert('session validate')
        this.router.navigate(['/event'])
      } else {
        alert('usuario y pass inválidos')
      }
    });
    
  }

}
