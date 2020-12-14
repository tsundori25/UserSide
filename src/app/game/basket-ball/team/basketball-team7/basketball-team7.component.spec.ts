import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketballTeam7Component } from './basketball-team7.component';

describe('BasketballTeam7Component', () => {
  let component: BasketballTeam7Component;
  let fixture: ComponentFixture<BasketballTeam7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketballTeam7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketballTeam7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
