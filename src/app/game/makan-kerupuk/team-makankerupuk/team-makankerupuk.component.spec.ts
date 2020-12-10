import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMakankerupukComponent } from './team-makankerupuk.component';

describe('TeamMakankerupukComponent', () => {
  let component: TeamMakankerupukComponent;
  let fixture: ComponentFixture<TeamMakankerupukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamMakankerupukComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMakankerupukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
