import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakankerupukTeam9Component } from './makankerupuk-team9.component';

describe('MakankerupukTeam9Component', () => {
  let component: MakankerupukTeam9Component;
  let fixture: ComponentFixture<MakankerupukTeam9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakankerupukTeam9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakankerupukTeam9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
