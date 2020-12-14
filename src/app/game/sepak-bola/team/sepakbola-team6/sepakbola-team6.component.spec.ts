import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepakbolaTeam6Component } from './sepakbola-team6.component';

describe('SepakbolaTeam6Component', () => {
  let component: SepakbolaTeam6Component;
  let fixture: ComponentFixture<SepakbolaTeam6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SepakbolaTeam6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SepakbolaTeam6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
