import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseSnippetComponent } from './purchase-snippet.component';

describe('PurchaseSnippetComponent', () => {
  let component: PurchaseSnippetComponent;
  let fixture: ComponentFixture<PurchaseSnippetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseSnippetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
