import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakankerupukTeam3Component } from './makankerupuk-team3.component';

describe('MakankerupukTeam3Component', () => {
  let component: MakankerupukTeam3Component;
  let fixture: ComponentFixture<MakankerupukTeam3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakankerupukTeam3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakankerupukTeam3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
