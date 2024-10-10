import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersTrustComponent } from './partners-trust.component';

describe('PartnersTrustComponent', () => {
  let component: PartnersTrustComponent;
  let fixture: ComponentFixture<PartnersTrustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnersTrustComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnersTrustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
