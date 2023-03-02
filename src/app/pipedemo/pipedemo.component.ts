import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css'],
})
export class PipedemoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  shoppingcart: any[] = [
    { name: 'samsung tv', price: 45600.33, city: 'hyd' },
    { name: 'nike casuals', price: 3333, city: 'mumbai' },
    { name: 'watch', price: 3344.55, city: 'chennnai' },
  ];
  status: any = {
    hyd: 'same day deivary',
    mumbai: 'one day delivary',
    chennai: 'delivary in 2 days',
    other: 'delivary status unknown-we will update soon',
  };
}
