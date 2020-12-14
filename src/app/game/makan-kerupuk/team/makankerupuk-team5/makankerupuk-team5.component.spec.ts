import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakankerupukTeam5Component } from './makankerupuk-team5.component';

describe('MakankerupukTeam5Component', () => {
  let component: MakankerupukTeam5Component;
  let fixture: ComponentFixture<MakankerupukTeam5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakankerupukTeam5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakankerupukTeam5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
