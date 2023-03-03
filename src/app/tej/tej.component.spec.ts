import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TejComponent } from './tej.component';

describe('TejComponent', () => {
  let component: TejComponent;
  let fixture: ComponentFixture<TejComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TejComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TejComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
