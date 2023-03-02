import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  product:any={
    Name:"samsung tv",
    price:45555,
    stock:false
  }
  tableheight:number=100;
  tablewidth:number=500;
  tableborder:number=1;


}
