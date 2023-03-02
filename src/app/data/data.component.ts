import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  productName:string='samsug tv';
  stock:boolean=true;
  city:string='delhi';

  constructor() { }

  ngOnInit(): void {
  }
  

}
