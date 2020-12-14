import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepakbolaTeam2Component } from './sepakbola-team2.component';

describe('SepakbolaTeam2Component', () => {
  let component: SepakbolaTeam2Component;
  let fixture: ComponentFixture<SepakbolaTeam2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SepakbolaTeam2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SepakbolaTeam2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
