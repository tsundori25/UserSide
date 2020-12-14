import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadmintonTeam9Component } from './badminton-team9.component';

describe('BadmintonTeam9Component', () => {
  let component: BadmintonTeam9Component;
  let fixture: ComponentFixture<BadmintonTeam9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadmintonTeam9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadmintonTeam9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
