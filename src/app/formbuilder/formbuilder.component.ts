import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  frmregister:any;

  ngOnInit(): void {
    this.frmregister=this.fb.group({
      name:this.fb.control(''),
      price:this.fb.control(0),
      frmstock:this.fb.group({
        status:this.fb.control(true),
        city:this.fb.control('delhi')
      })

    })
  }
  formsubmit(obj:any){
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
