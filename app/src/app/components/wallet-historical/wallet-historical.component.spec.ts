import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletHistoricalComponent } from './wallet-historical.component';

describe('WalletHistoricalComponent', () => {
  let component: WalletHistoricalComponent;
  let fixture: ComponentFixture<WalletHistoricalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletHistoricalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletHistoricalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
