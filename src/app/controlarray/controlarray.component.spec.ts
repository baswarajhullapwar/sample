import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlarrayComponent } from './controlarray.component';

describe('ControlarrayComponent', () => {
  let component: ControlarrayComponent;
  let fixture: ComponentFixture<ControlarrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlarrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
