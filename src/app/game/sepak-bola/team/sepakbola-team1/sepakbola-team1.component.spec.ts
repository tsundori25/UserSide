import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepakbolaTeam1Component } from './sepakbola-team1.component';

describe('SepakbolaTeam1Component', () => {
  let component: SepakbolaTeam1Component;
  let fixture: ComponentFixture<SepakbolaTeam1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SepakbolaTeam1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SepakbolaTeam1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
