import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  @Input() allcount: number = 0;
  @Input() electronicscount: number = 0;
  @Input() jewellarycount: number = 0;
  @Input() mensclothingcount: number = 0;
  @Input() womensclothingcount: number = 0;
  @Output() filterchanged:EventEmitter<string>=new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

filterbuttonclick(e:any){
  this.filterchanged.emit(e.target.name);

}

}
