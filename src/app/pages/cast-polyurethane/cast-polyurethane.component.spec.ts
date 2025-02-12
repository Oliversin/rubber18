import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastPolyurethaneComponent } from './cast-polyurethane.component';

describe('CastPolyurethaneComponent', () => {
  let component: CastPolyurethaneComponent;
  let fixture: ComponentFixture<CastPolyurethaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CastPolyurethaneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CastPolyurethaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
