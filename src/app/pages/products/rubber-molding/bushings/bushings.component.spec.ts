import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BushingsComponent } from './bushings.component';

describe('BushingsComponent', () => {
  let component: BushingsComponent;
  let fixture: ComponentFixture<BushingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BushingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BushingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
