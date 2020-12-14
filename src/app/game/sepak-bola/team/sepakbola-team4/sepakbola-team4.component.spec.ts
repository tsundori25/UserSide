import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepakbolaTeam4Component } from './sepakbola-team4.component';

describe('SepakbolaTeam4Component', () => {
  let component: SepakbolaTeam4Component;
  let fixture: ComponentFixture<SepakbolaTeam4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SepakbolaTeam4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SepakbolaTeam4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
