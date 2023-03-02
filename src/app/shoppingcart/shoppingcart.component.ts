import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  categories:string[]=[];
  getcategories(){
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then(data=>{
    data.unshift('all');
        this.categories=data;
      })
  }
  products:any[]=[];
  getproducts(){
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>{
              this.products=data;
            })
  }
  

  constructor() { }

  ngOnInit(): void {
    this.getcategories();
    this.getproducts();
  }
  categorychanged(e:any){
    if(e.target.value=='all'){
      this.getproducts();
    }else{
      fetch(`https://fakestoreapi.com/products/category/${e.target.value}`)
      .then(res => res.json())
      .then(data=>{
        this.products=data;
    })
  }

}
cartitems:any[]=[];
addtocartclick(product:any){
  this.cartitems.push(product);
  alert(`${product.title}\n added to cart`);
  this.getcartitemscount();
}
count:number=0;
getcartitemscount(){
  this.count=this.cartitems.length;
}
togglecart:boolean=false;
toggle(){
  this.togglecart=(this.togglecart==false)?true:false;
}
}

