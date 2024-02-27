import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarSLComponent } from './nav-bar-sl.component';

describe('NavBarSLComponent', () => {
  let component: NavBarSLComponent;
  let fixture: ComponentFixture<NavBarSLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavBarSLComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavBarSLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
