import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indexdemo',
  templateUrl: './indexdemo.component.html',
  styleUrls: ['./indexdemo.component.css']
})
export class IndexdemoComponent implements OnInit {
  products:any[]=[];
  productname:string='';
  productprice:number=0;
  product:any={};

  constructor() { }

  ngOnInit(): void {
  }
  registerclick(){
    this.product={
      name:this.productname,
      price:this.productprice
    }
    this.products.push(this.product);
    alert('product register');
    this.productname='';
    this.productprice=0;

  }
  deleteclick(index:number){
    let flag=confirm('are you sure want uu delete');
    if(flag==true){
      this.products.splice(index,1)
    }

  }

}
