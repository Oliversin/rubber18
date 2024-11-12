import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoundingComponent } from './compounding.component';

describe('CompoundingComponent', () => {
  let component: CompoundingComponent;
  let fixture: ComponentFixture<CompoundingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompoundingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoundingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
