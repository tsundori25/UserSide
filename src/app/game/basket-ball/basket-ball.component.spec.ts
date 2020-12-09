import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketBallComponent } from './basket-ball.component';

describe('BasketBallComponent', () => {
  let component: BasketBallComponent;
  let fixture: ComponentFixture<BasketBallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketBallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
