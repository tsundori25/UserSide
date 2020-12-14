import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketballTeam9Component } from './basketball-team9.component';

describe('BasketballTeam9Component', () => {
  let component: BasketballTeam9Component;
  let fixture: ComponentFixture<BasketballTeam9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketballTeam9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketballTeam9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
