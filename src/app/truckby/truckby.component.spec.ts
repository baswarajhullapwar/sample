import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckbyComponent } from './truckby.component';

describe('TruckbyComponent', () => {
  let component: TruckbyComponent;
  let fixture: ComponentFixture<TruckbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruckbyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruckbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
