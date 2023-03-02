import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeventComponent } from './customevent.component';

describe('CustomeventComponent', () => {
  let component: CustomeventComponent;
  let fixture: ComponentFixture<CustomeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomeventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
