import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifdemo2',
  templateUrl: './ifdemo2.component.html',
  styleUrls: ['./ifdemo2.component.css']
})
export class Ifdemo2Component implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  product:any={
    Name:'nike casuals',
    preview:'assets/baswa image.jpg',
    description:'something about baswa'
  }
  btnText:string='description';
  togglepreview:boolean=true;
  previewclick(){
    this.togglepreview=(this.togglepreview==true)?false:true;
    this.btnText=(this.btnText=='description')?'preview':'description';

  }

}
