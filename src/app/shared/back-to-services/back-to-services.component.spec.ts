import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToServicesComponent } from './back-to-services.component';

describe('BackToServicesComponent', () => {
  let component: BackToServicesComponent;
  let fixture: ComponentFixture<BackToServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackToServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackToServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
