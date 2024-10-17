import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoamInsulationComponent } from './foam-insulation.component';

describe('FoamInsulationComponent', () => {
  let component: FoamInsulationComponent;
  let fixture: ComponentFixture<FoamInsulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoamInsulationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoamInsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
