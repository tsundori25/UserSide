import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakankerupukTeam6Component } from './makankerupuk-team6.component';

describe('MakankerupukTeam6Component', () => {
  let component: MakankerupukTeam6Component;
  let fixture: ComponentFixture<MakankerupukTeam6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakankerupukTeam6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakankerupukTeam6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
