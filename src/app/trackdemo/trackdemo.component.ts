import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trackdemo',
  templateUrl: './trackdemo.component.html',
  styleUrls: ['./trackdemo.component.css']
})
export class TrackdemoComponent implements OnInit {
  products:any[]=[
    {name:'aaaa',photo:'assets/1.jpeg',likes:0,dislikes:0},
     {name:'bbbb',photo:'assets/2.jpeg',likes:0,dislikes:0}
  ]

  constructor() { }

  ngOnInit(): void {
  }
  likesclick(item:any){
    item.likes++;
  }
  dislikeclick(item:any){
    item.dislikes++;
  }

}
