import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialdemoComponent } from './materialdemo.component';

describe('MaterialdemoComponent', () => {
  let component: MaterialdemoComponent;
  let fixture: ComponentFixture<MaterialdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialdemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
