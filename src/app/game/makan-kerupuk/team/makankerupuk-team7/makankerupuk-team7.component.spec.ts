import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakankerupukTeam7Component } from './makankerupuk-team7.component';

describe('MakankerupukTeam7Component', () => {
  let component: MakankerupukTeam7Component;
  let fixture: ComponentFixture<MakankerupukTeam7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakankerupukTeam7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakankerupukTeam7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
