import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadmintonTeam4Component } from './badminton-team4.component';

describe('BadmintonTeam4Component', () => {
  let component: BadmintonTeam4Component;
  let fixture: ComponentFixture<BadmintonTeam4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadmintonTeam4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadmintonTeam4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
