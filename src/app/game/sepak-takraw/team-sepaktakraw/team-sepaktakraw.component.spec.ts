import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamSepaktakrawComponent } from './team-sepaktakraw.component';

describe('TeamSepaktakrawComponent', () => {
  let component: TeamSepaktakrawComponent;
  let fixture: ComponentFixture<TeamSepaktakrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamSepaktakrawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamSepaktakrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
