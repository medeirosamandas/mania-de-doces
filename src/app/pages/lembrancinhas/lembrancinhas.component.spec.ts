import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LembrancinhasComponent } from './lembrancinhas.component';

describe('LembrancinhasComponent', () => {
  let component: LembrancinhasComponent;
  let fixture: ComponentFixture<LembrancinhasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LembrancinhasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LembrancinhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
