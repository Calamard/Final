import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private categoryServices:CategoryService) { }

  ngOnInit() {
  }

  list(){
    this.categoryServices.list().subscribe(
      data => {
        console.log('data')
        alert('data')
      },
      error => {
        console.log('error')
        alert('error')
      }
    )
  }
}
