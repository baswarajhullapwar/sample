import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyevents',
  templateUrl: './keyevents.component.html',
  styleUrls: ['./keyevents.component.css']
})
export class KeyeventsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  users:any[]=[
    {Username:'john'},
       {Username:'john12'},
          {Username:'john-nit'},
             {Username:'david'}
  ];
  statusmessage:string='';
  isnameavailable:boolean=true;
  verifyuser(e:any){
    for(var user of this.users){
      if(user.Username==e.target.value){
        this.statusmessage='user name is taken-try another value';
        this.isnameavailable=false;
        break;
      }else{
        this.statusmessage='user name available';
        this.isnameavailable=true;
      }
    }
  }
  showcapserror:boolean=false;
  verifypassword(e:any){
    if(e.keycode>=65 && e.keycode<=90){
      this.showcapserror=true;
    }else{
      this.showcapserror=false;
    }
  }

}
