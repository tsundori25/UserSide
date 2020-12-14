import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketballTeam3Component } from './basketball-team3.component';

describe('BasketballTeam3Component', () => {
  let component: BasketballTeam3Component;
  let fixture: ComponentFixture<BasketballTeam3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketballTeam3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketballTeam3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
