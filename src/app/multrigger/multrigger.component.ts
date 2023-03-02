import { Component, OnInit } from '@angular/core';
import{trigger,state,style,transition,animate} from '@angular/animations';

@Component({
  selector: 'app-multrigger',
  templateUrl: './multrigger.component.html',
  styleUrls: ['./multrigger.component.css'],
  animations:[
    trigger('zoom',[
      state('initial',style(
        {
          'font-size':'20px',
          'transform':'rotate(0deg)'

        }
      )),
      state('final',style({
        'font-size':'80px',
        'transform':'rotate(360deg)'
      })),
      transition('initial=>final',animate(4000)),
      transition('final=>initial',animate(3000))
    ]),
    trigger('zoomimage',[
      state('initial',style(
        {
          'width':'100px',
          'height':'100px',
          'transform':'rotate(0deg)'
        }
      )),
      state('final',style({
        'width':'200px',
        'height':'200px',
        'transform':'rotate(360deg)'
      })),
      transition('initial=>final',animate(4000)),
      transition('final=>initial',animate(3000))
    ])
  ]
})
export class MultriggerComponent implements OnInit {
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
