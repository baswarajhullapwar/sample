import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,FormBuilder,FormArray} from '@angular/forms';

@Component({
  selector: 'app-controlarray',
  templateUrl: './controlarray.component.html',
  styleUrls: ['./controlarray.component.css']
})
export class ControlarrayComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  frmregister:any;
  ngOnInit(): void {
    this.frmregister=this.fb.group({
      name:this.fb.control(''),
      price:this.fb.control(0),
      frmstock:this.fb.group({
        status:this.fb.control(true),
        city:this.fb.control('delhi')
      }),
      newcontrols:this.fb.array([this.fb.control('')])


    })
  }
  get newcontrols(){
    return this.frmregister.get('newcontrols') as FormArray;
  }
  addclick(){
    this.newcontrols.push(this.fb.control(''));
  }
  removeclick(i:number)
  {
    this.newcontrols.removeAt(i);
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
