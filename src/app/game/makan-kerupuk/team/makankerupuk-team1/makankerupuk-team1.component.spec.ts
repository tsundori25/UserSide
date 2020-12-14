import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakankerupukTeam1Component } from './makankerupuk-team1.component';

describe('MakankerupukTeam1Component', () => {
  let component: MakankerupukTeam1Component;
  let fixture: ComponentFixture<MakankerupukTeam1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakankerupukTeam1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakankerupukTeam1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
