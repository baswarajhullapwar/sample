import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyeventsComponent } from './keyevents.component';

describe('KeyeventsComponent', () => {
  let component: KeyeventsComponent;
  let fixture: ComponentFixture<KeyeventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyeventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
