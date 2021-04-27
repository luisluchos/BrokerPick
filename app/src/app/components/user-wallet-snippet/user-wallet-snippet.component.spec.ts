import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWalletSnippetComponent } from './user-wallet-snippet.component';

describe('UserWalletSnippetComponent', () => {
  let component: UserWalletSnippetComponent;
  let fixture: ComponentFixture<UserWalletSnippetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWalletSnippetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWalletSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
