import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepakbolaTeam3Component } from './sepakbola-team3.component';

describe('SepakbolaTeam3Component', () => {
  let component: SepakbolaTeam3Component;
  let fixture: ComponentFixture<SepakbolaTeam3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SepakbolaTeam3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SepakbolaTeam3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
