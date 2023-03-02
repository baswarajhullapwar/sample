import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ifdemo2Component } from './ifdemo2.component';

describe('Ifdemo2Component', () => {
  let component: Ifdemo2Component;
  let fixture: ComponentFixture<Ifdemo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ifdemo2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ifdemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
