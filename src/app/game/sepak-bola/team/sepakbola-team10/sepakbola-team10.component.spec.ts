import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepakbolaTeam10Component } from './sepakbola-team10.component';

describe('SepakbolaTeam10Component', () => {
  let component: SepakbolaTeam10Component;
  let fixture: ComponentFixture<SepakbolaTeam10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SepakbolaTeam10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SepakbolaTeam10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
