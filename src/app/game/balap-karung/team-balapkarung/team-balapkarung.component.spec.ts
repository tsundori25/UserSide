import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamBalapkarungComponent } from './team-balapkarung.component';

describe('TeamBalapkarungComponent', () => {
  let component: TeamBalapkarungComponent;
  let fixture: ComponentFixture<TeamBalapkarungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamBalapkarungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamBalapkarungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
