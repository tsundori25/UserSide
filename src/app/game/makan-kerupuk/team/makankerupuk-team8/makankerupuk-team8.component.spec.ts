import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakankerupukTeam8Component } from './makankerupuk-team8.component';

describe('MakankerupukTeam8Component', () => {
  let component: MakankerupukTeam8Component;
  let fixture: ComponentFixture<MakankerupukTeam8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakankerupukTeam8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakankerupukTeam8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
