import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadmintonTeam8Component } from './badminton-team8.component';

describe('BadmintonTeam8Component', () => {
  let component: BadmintonTeam8Component;
  let fixture: ComponentFixture<BadmintonTeam8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadmintonTeam8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadmintonTeam8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
