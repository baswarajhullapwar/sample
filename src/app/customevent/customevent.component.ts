import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customevent',
  templateUrl: './customevent.component.html',
  styleUrls: ['./customevent.component.css']
})
export class CustomeventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  formsubmit(obj:any){
    alert(JSON.stringify(obj));
  }
  iscityinvalid:boolean=true;
  citychanged(e:any){
    if(e.target.value=='-1'){
      this.iscityinvalid=true;
    }else{
      this.iscityinvalid=false;
    }
  }
  iseveninvalid:boolean=true;
  verifyeven(e:any){
    if(parseInt(e.target.value)%2==0){
      this.iseveninvalid=false;
    }else{
      this.iseveninvalid=true;
    }
  }

}
