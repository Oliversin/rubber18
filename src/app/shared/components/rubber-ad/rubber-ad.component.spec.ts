import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubberAdComponent } from './rubber-ad.component';

describe('RubberAdComponent', () => {
  let component: RubberAdComponent;
  let fixture: ComponentFixture<RubberAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RubberAdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RubberAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
