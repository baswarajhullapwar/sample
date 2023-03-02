import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.css']
})
export class NasaComponent implements OnInit {
  marsobject:any={};
  getmarsphotos(){
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY&#39;`)
    .then(res=>res.json())
    .then(data=>{
      this.marsobject=data;
    })
  }

  constructor() { }

  ngOnInit(): void {
    this.getmarsphotos();
  }

}
