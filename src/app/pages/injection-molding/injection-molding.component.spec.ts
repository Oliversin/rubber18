import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectionMoldingComponent } from './injection-molding.component';

describe('InjectionMoldingComponent', () => {
  let component: InjectionMoldingComponent;
  let fixture: ComponentFixture<InjectionMoldingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InjectionMoldingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InjectionMoldingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
