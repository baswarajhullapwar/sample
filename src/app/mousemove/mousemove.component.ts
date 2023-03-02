import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mousemove',
  templateUrl: './mousemove.component.html',
  styleUrls: ['./mousemove.component.css']
})
export class MousemoveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  styleobject={
    'position':'fixed',
    'top':'',
    'left':''

  }
  mousemove(event:any){
    console.log(`x=${event.clientX}\nY=${event.clientY}`);
    this.styleobject = {
      'position': 'fixed',
      'top': event.clientY + 'px',
      'left': event.clientX + 'px'
    }

  }

}
