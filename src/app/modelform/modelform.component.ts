import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modelform',
  templateUrl: './modelform.component.html',
  styleUrls: ['./modelform.component.css']
})
export class ModelformComponent implements OnInit {
  frmregister=new FormGroup({
    name:new FormControl(''),
    price:new FormControl(0),
    frmstock:new FormGroup({
      status:new FormControl(true),
      city:new FormControl('')
    })

  })

  constructor() { }

  ngOnInit(): void {
  }
  FormSubmit(obj:any){
    alert(JSON.stringify(obj));
  }
  updatepartial(){
    this.frmregister.patchValue({
      name:'samsung tv',
      frmstock:{
        city:'hyd'
      }
    })
  }

}
