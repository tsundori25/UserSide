import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamBadmintonComponent } from './team-badminton.component';

describe('TeamBadmintonComponent', () => {
  let component: TeamBadmintonComponent;
  let fixture: ComponentFixture<TeamBadmintonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamBadmintonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamBadmintonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
