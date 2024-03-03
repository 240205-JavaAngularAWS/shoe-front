import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerCategoriesComponent } from './seller-categories.component';

describe('SellerCategoriesComponent', () => {
  let component: SellerCategoriesComponent;
  let fixture: ComponentFixture<SellerCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SellerCategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellerCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
