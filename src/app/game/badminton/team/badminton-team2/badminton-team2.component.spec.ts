import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadmintonTeam2Component } from './badminton-team2.component';

describe('BadmintonTeam2Component', () => {
  let component: BadmintonTeam2Component;
  let fixture: ComponentFixture<BadmintonTeam2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadmintonTeam2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadmintonTeam2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
