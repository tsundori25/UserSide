import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakankerupukTeam2Component } from './makankerupuk-team2.component';

describe('MakankerupukTeam2Component', () => {
  let component: MakankerupukTeam2Component;
  let fixture: ComponentFixture<MakankerupukTeam2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakankerupukTeam2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakankerupukTeam2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
