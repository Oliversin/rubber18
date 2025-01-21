import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubberCalenderingComponent } from './rubber-calendering.component';

describe('RubberCalenderingComponent', () => {
  let component: RubberCalenderingComponent;
  let fixture: ComponentFixture<RubberCalenderingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RubberCalenderingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RubberCalenderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
