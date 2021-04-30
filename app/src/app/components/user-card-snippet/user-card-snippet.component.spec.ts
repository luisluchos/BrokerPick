import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardSnippetComponent } from './user-card-snippet.component';

describe('UserCardSnippetComponent', () => {
  let component: UserCardSnippetComponent;
  let fixture: ComponentFixture<UserCardSnippetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCardSnippetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
