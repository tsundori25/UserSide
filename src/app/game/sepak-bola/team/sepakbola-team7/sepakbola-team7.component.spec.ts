import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepakbolaTeam7Component } from './sepakbola-team7.component';

describe('SepakbolaTeam7Component', () => {
  let component: SepakbolaTeam7Component;
  let fixture: ComponentFixture<SepakbolaTeam7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SepakbolaTeam7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SepakbolaTeam7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
