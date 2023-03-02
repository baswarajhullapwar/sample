import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifdemo',
  templateUrl: './ifdemo.component.html',
  styleUrls: ['./ifdemo.component.css']
})
export class IfdemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  product:any={
    Name:'nike casuals',
    price:5000.44,
    preview:'assets/baswa image.jpg'
  }

}
