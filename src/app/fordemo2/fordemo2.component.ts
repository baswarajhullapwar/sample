import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordemo2',
  templateUrl: './fordemo2.component.html',
  styleUrls: ['./fordemo2.component.css']
})
export class Fordemo2Component implements OnInit {
  data:any[]=[
    {category:"electronics",products:['tv','mobiles']},
    {category:'footwear',products:['nike casual','lee boot']}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
