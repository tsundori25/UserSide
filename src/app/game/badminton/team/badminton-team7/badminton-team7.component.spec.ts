import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadmintonTeam7Component } from './badminton-team7.component';

describe('BadmintonTeam7Component', () => {
  let component: BadmintonTeam7Component;
  let fixture: ComponentFixture<BadmintonTeam7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadmintonTeam7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadmintonTeam7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
