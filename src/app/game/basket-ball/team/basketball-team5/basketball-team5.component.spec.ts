import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketballTeam5Component } from './basketball-team5.component';

describe('BasketballTeam5Component', () => {
  let component: BasketballTeam5Component;
  let fixture: ComponentFixture<BasketballTeam5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketballTeam5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketballTeam5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
