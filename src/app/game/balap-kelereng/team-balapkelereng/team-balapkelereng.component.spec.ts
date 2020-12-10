import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamBalapkelerengComponent } from './team-balapkelereng.component';

describe('TeamBalapkelerengComponent', () => {
  let component: TeamBalapkelerengComponent;
  let fixture: ComponentFixture<TeamBalapkelerengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamBalapkelerengComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamBalapkelerengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
