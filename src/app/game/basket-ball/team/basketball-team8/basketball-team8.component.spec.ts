import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketballTeam8Component } from './basketball-team8.component';

describe('BasketballTeam8Component', () => {
  let component: BasketballTeam8Component;
  let fixture: ComponentFixture<BasketballTeam8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketballTeam8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketballTeam8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
