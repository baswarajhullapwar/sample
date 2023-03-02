import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackdemoComponent } from './trackdemo.component';

describe('TrackdemoComponent', () => {
  let component: TrackdemoComponent;
  let fixture: ComponentFixture<TrackdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackdemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
