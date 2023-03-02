import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwitchdemoComponent } from './awitchdemo.component';

describe('AwitchdemoComponent', () => {
  let component: AwitchdemoComponent;
  let fixture: ComponentFixture<AwitchdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwitchdemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwitchdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
