import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyCraftAuthComponent } from './easy-craft-auth.component';

describe('EasyCraftAuthComponent', () => {
  let component: EasyCraftAuthComponent;
  let fixture: ComponentFixture<EasyCraftAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EasyCraftAuthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EasyCraftAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
