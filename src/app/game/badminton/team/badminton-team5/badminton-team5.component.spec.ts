import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadmintonTeam5Component } from './badminton-team5.component';

describe('BadmintonTeam5Component', () => {
  let component: BadmintonTeam5Component;
  let fixture: ComponentFixture<BadmintonTeam5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadmintonTeam5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadmintonTeam5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
