import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderingComponent } from './calendering.component';

describe('CalenderingComponent', () => {
  let component: CalenderingComponent;
  let fixture: ComponentFixture<CalenderingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalenderingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalenderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
