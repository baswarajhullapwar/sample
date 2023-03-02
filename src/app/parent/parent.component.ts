import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  messagetochild:string|null=null;
  objecttochild:any={};
  message:string='';

  constructor() { }

  ngOnInit(): void {
  }
  sendclick(){
    this.messagetochild='hello from parent';
    this.objecttochild={
      'name':'Tv',
      'price':3333.22
    }
  }
  sendtoparent(e:any){
    this.message=e;
  }
  name:string='';
  price:number=0;
  sendobject(e:any){
    this.name=e.name;
    this.price=e.price;
  }

}
