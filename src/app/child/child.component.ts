import { Component, Input, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() message:string|null="waiting for meassage from parent";
  @Input() obj:any={};
  messagetoparent="hello from child";
  @Output() childcomponentclick:EventEmitter<string>=
  new EventEmitter<string>();
  @Output() childcomponentsendobjectclick:EventEmitter<any>=
  new EventEmitter<any>();
  product:any={name:'nike casuals',price:3333};

  constructor() { }

  ngOnInit(): void {
  }
  sendclick(){
    this.childcomponentclick.emit(this.messagetoparent);
    this.childcomponentsendobjectclick.emit(this.product);
  }

}
