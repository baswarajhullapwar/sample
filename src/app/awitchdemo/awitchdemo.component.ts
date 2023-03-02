import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awitchdemo',
  templateUrl: './awitchdemo.component.html',
  styleUrls: ['./awitchdemo.component.css']
})
export class AwitchdemoComponent implements OnInit {
  product:any={};

  getdata(productid:number){
    fetch(`https://fakestoreapi.com/products/${productid}`)
      .then(res => res.json())
      .then(data=>{
        this.product=data;
      })
    }
      
  
  Templetodisplay:string='';
  constructor() { }

  ngOnInit(): void {
    this.getdata(5);
    
  }
  changeTemplate(e:any){
    this.Templetodisplay=e.target.name;

  }

}
