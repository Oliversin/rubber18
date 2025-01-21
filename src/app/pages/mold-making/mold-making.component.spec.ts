import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoldMakingComponent } from './mold-making.component';

describe('MoldMakingComponent', () => {
  let component: MoldMakingComponent;
  let fixture: ComponentFixture<MoldMakingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoldMakingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoldMakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
