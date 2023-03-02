import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger,style,state,transition,animate, } from '@angular/animations';

@Component({
  selector: 'app-animationdemo',
  templateUrl: './animationdemo.component.html',
  styleUrls: ['./animationdemo.component.css'],
  animations:[
    trigger('zoom',[
      state('initial',style(
        {
          'width':'100px',
          'height':'100px',
          'transform':'rotate(0deg)'
        }

      )),
      state('final',style({
        'width':'300px',
        'height':'300px',
        'transform':'rotate(360deg)'

      })),
      transition('initial=>final',animate(4000)),
      transition('final=>initial',animate(3000))

    ])
  ]
})
export class AnimationdemoComponent implements OnInit {
  animationstate:any='initial';
  buttontext:string='in';

  constructor() { }

  ngOnInit(): void {
  }
  zoomclick(){
    this.animationstate=(this.animationstate=='initial')?'final':'initial';
    this.buttontext=(this.buttontext=='in')?'out':'in';
  }
  zoominclick(){
    this.animationstate='final';
  }
  zoomoutclick(){
    this.animationstate='initial';
  }

}
