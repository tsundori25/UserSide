import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadmintonTeam10Component } from './badminton-team10.component';

describe('BadmintonTeam10Component', () => {
  let component: BadmintonTeam10Component;
  let fixture: ComponentFixture<BadmintonTeam10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadmintonTeam10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadmintonTeam10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
