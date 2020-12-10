import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamBolavoliComponent } from './team-bolavoli.component';

describe('TeamBolavoliComponent', () => {
  let component: TeamBolavoliComponent;
  let fixture: ComponentFixture<TeamBolavoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamBolavoliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamBolavoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
