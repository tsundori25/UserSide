import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakankerupukTeam10Component } from './makankerupuk-team10.component';

describe('MakankerupukTeam10Component', () => {
  let component: MakankerupukTeam10Component;
  let fixture: ComponentFixture<MakankerupukTeam10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakankerupukTeam10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakankerupukTeam10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
