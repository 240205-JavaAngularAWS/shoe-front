import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerIconComponent } from './seller-icon.component';

describe('SellerIconComponent', () => {
  let component: SellerIconComponent;
  let fixture: ComponentFixture<SellerIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SellerIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellerIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
