import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ORingsComponent } from './o-rings.component';

describe('ORingsComponent', () => {
  let component: ORingsComponent;
  let fixture: ComponentFixture<ORingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ORingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ORingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
