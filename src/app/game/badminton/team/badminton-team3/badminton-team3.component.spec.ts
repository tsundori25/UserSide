import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadmintonTeam3Component } from './badminton-team3.component';

describe('BadmintonTeam3Component', () => {
  let component: BadmintonTeam3Component;
  let fixture: ComponentFixture<BadmintonTeam3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadmintonTeam3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadmintonTeam3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
