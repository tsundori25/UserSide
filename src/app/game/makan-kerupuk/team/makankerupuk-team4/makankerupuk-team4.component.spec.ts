import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakankerupukTeam4Component } from './makankerupuk-team4.component';

describe('MakankerupukTeam4Component', () => {
  let component: MakankerupukTeam4Component;
  let fixture: ComponentFixture<MakankerupukTeam4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakankerupukTeam4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakankerupukTeam4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
