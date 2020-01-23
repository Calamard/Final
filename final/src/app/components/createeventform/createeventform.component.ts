import { Component, OnInit } from '@angular/core';
import { BuiltinType } from '@angular/compiler';
import { Button } from 'protractor';

@Component({
  selector: 'app-createeventform',
  templateUrl: './createeventform.component.html',
  styleUrls: ['./createeventform.component.css']
})
export class CreateeventformComponent implements OnInit {

  private texto:String;
  constructor() { }

  ngOnInit() {
    if(this.texto=="admin"){
      this.hidebutton()
    }
  }

  hidebutton(){
    let btn=document.getElementById("btncreate").style;
    btn.visibility="hidden";
  }

  permiso(value:String){
    this.texto=value;
  }

}
