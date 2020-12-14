import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketballTeam1Component } from './basketball-team1.component';

describe('BasketballTeam1Component', () => {
  let component: BasketballTeam1Component;
  let fixture: ComponentFixture<BasketballTeam1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketballTeam1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketballTeam1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
