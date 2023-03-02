import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-databinding3',
  templateUrl: './databinding3.component.html',
  styleUrls: ['./databinding3.component.css']
})
export class Databinding3Component implements OnInit {

  product:any={};
  productId:number=5;
  constructor() { }

  ngOnInit(): void {
   fetch('https://fakestoreapi.com/products/${this.productId}')
     .then(res => res.json())
     .then(data=>{
      this.product=data;
     })
   
  }

}
