import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BumpStopsComponent } from './bump-stops.component';

describe('BumpStopsComponent', () => {
  let component: BumpStopsComponent;
  let fixture: ComponentFixture<BumpStopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BumpStopsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BumpStopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
