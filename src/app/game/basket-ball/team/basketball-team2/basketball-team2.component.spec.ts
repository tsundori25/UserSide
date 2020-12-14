import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketballTeam2Component } from './basketball-team2.component';

describe('BasketballTeam2Component', () => {
  let component: BasketballTeam2Component;
  let fixture: ComponentFixture<BasketballTeam2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketballTeam2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketballTeam2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
