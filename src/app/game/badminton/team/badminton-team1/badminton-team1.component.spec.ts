import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadmintonTeam1Component } from './badminton-team1.component';

describe('BadmintonTeam1Component', () => {
  let component: BadmintonTeam1Component;
  let fixture: ComponentFixture<BadmintonTeam1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadmintonTeam1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadmintonTeam1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
