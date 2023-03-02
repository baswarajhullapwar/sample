import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fordemo2Component } from './fordemo2.component';

describe('Fordemo2Component', () => {
  let component: Fordemo2Component;
  let fixture: ComponentFixture<Fordemo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fordemo2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fordemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
