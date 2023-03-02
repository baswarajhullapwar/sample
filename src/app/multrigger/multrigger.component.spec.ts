import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultriggerComponent } from './multrigger.component';

describe('MultriggerComponent', () => {
  let component: MultriggerComponent;
  let fixture: ComponentFixture<MultriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultriggerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
