import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadmintonTeam6Component } from './badminton-team6.component';

describe('BadmintonTeam6Component', () => {
  let component: BadmintonTeam6Component;
  let fixture: ComponentFixture<BadmintonTeam6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadmintonTeam6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadmintonTeam6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
