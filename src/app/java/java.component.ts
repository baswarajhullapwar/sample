import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent implements OnInit {
  categories:any={};
  getcategories(){
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(data=>{
        
        this.categories=data;
      })
  }

  constructor() { }

  ngOnInit(): void {
    this.getcategories();
  }
 

  

}
