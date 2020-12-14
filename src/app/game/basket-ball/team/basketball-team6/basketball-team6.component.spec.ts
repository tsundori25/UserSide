import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketballTeam6Component } from './basketball-team6.component';

describe('BasketballTeam6Component', () => {
  let component: BasketballTeam6Component;
  let fixture: ComponentFixture<BasketballTeam6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketballTeam6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketballTeam6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
