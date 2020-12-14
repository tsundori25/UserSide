import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketballTeam4Component } from './basketball-team4.component';

describe('BasketballTeam4Component', () => {
  let component: BasketballTeam4Component;
  let fixture: ComponentFixture<BasketballTeam4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketballTeam4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketballTeam4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
