import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBasketballComponent } from './register-basketball.component';

describe('RegisterBasketballComponent', () => {
  let component: RegisterBasketballComponent;
  let fixture: ComponentFixture<RegisterBasketballComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterBasketballComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBasketballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
