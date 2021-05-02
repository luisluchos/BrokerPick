import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPrivateWalletComponent } from './user-private-wallet.component';

describe('UserWalletComponent', () => {
  let component: UserPrivateWalletComponent;
  let fixture: ComponentFixture<UserPrivateWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPrivateWalletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPrivateWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
