import { Component, OnInit,Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit,OnChanges{
  @Input() username:string='';
  previousvalue:string='';
  currentvalue:string='';
  msg:string='';

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    for(var property in changes){
      let change=changes[property];
      this.currentvalue=change.currentValue;
      this.previousvalue=change.previousValue;

    }
    if(this.currentvalue=this.previousvalue){
      this.msg="no change detected";
    }else{
      this.msg="chnange detected";
    }
  }

}
