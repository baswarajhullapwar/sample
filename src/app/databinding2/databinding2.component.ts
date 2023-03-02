import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding2',
  templateUrl: './databinding2.component.html',
  styleUrls: ['./databinding2.component.css'],
})
export class Databinding2Component implements OnInit {
  product: any = {
    Name: 'samsung tv',
    price: 45555,
    stock: false,
    city: 'delhi',
  }

  constructor() {}

  ngOnInit(): void {}
  

  
  
}
