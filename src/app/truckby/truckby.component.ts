import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-truckby',
  templateUrl: './truckby.component.html',
  styleUrls: ['./truckby.component.css']
})
export class TruckbyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products:any[]=[
    {name:'tv',price:2222},
      {name:'mobile',price:22442},
        {name:'nike',price:22223442}
  ];
  addnewproduct(){
    this.products = [
      { name: 'tv', price: 2222 },
      { name: 'mobile', price: 22442 },
      { name: 'nike', price: 22223442 },
      {name:'baswa',price:4332323}
    ];
    alert('add clicked');
  }
  TrackChanges(index:number)
  {
    return index;
  }

}
