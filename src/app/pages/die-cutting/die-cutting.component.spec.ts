import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieCuttingComponent } from './die-cutting.component';

describe('DieCuttingComponent', () => {
  let component: DieCuttingComponent;
  let fixture: ComponentFixture<DieCuttingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DieCuttingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DieCuttingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
