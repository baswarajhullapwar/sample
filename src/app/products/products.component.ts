import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  allcount: number = 0;
  electronicscount: number = 0;
  jewellarycount: number = 0;
  menscount: number = 0;
  womenscount: number = 0;
  getproducts() {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => {
        this.products = data;
        this.allcount = data.length;
        this.electronicscount = data.filter(
          (product: any) => product.category == 'electronics'
        ).length;
        this.jewellarycount = data.filter(
          (product: any) => product.category == 'jewellary'
        ).length;
        this.menscount = data.filter(
          (product: any) => product.category == 'mens clothing'
        ).length;
        this.womenscount = data.filter(
          (product: any) => product.category == 'womens clothing'
        ).length;
      });
  }

  constructor() {}

  ngOnInit(): void {
    this.getproducts();
  }
  categoryname: string = 'all';
  getcategoryname(e: any) {
    this.categoryname = e;
    if (this.categoryname == 'all') {
      this.getproducts();
    } else {
      fetch(`https://fakestoreapi.com/products/category/${this.categoryname}`)
        .then(res => res.json())
        .then(data=> {
          this.products = data;
        })
    }
  }
}
