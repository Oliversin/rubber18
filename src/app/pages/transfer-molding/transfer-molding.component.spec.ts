import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferMoldingComponent } from './transfer-molding.component';

describe('TransferMoldingComponent', () => {
  let component: TransferMoldingComponent;
  let fixture: ComponentFixture<TransferMoldingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferMoldingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferMoldingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
