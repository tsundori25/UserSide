import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepakbolaTeam9Component } from './sepakbola-team9.component';

describe('SepakbolaTeam9Component', () => {
  let component: SepakbolaTeam9Component;
  let fixture: ComponentFixture<SepakbolaTeam9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SepakbolaTeam9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SepakbolaTeam9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
