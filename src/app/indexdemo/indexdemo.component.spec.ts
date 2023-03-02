import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexdemoComponent } from './indexdemo.component';

describe('IndexdemoComponent', () => {
  let component: IndexdemoComponent;
  let fixture: ComponentFixture<IndexdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexdemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
