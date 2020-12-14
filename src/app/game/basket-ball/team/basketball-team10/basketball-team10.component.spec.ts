import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketballTeam10Component } from './basketball-team10.component';

describe('BasketballTeam10Component', () => {
  let component: BasketballTeam10Component;
  let fixture: ComponentFixture<BasketballTeam10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketballTeam10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketballTeam10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
