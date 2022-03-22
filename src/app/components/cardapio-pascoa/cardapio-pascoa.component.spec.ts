import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioPascoaComponent } from './cardapio-pascoa.component';

describe('CardapioPascoaComponent', () => {
  let component: CardapioPascoaComponent;
  let fixture: ComponentFixture<CardapioPascoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardapioPascoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardapioPascoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
