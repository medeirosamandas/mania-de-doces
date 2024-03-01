import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OvosDePascoaComponent } from './ovos-de-pascoa.component';

describe('OvosDePascoaComponent', () => {
  let component: OvosDePascoaComponent;
  let fixture: ComponentFixture<OvosDePascoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OvosDePascoaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OvosDePascoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
