import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepakbolaTeam8Component } from './sepakbola-team8.component';

describe('SepakbolaTeam8Component', () => {
  let component: SepakbolaTeam8Component;
  let fixture: ComponentFixture<SepakbolaTeam8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SepakbolaTeam8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SepakbolaTeam8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
