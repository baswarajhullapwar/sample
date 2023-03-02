import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-fakestore',
  templateUrl: './fakestore.component.html',
  styleUrls: ['./fakestore.component.css']
})
export class FakestoreComponent implements OnInit {

  constructor(private service:ServiceService) { }
  categories:string[]=[];
  products:any[]=[];

  ngOnInit(): void {
    this.service.getcategories().subscribe(category=>this.categories=category);
    this.service.getproducts().subscribe(product=>this.products=product);
  }

}
