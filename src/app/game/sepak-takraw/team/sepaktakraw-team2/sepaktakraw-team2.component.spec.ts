import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepaktakrawTeam2Component } from './sepaktakraw-team2.component';

describe('SepaktakrawTeam2Component', () => {
  let component: SepaktakrawTeam2Component;
  let fixture: ComponentFixture<SepaktakrawTeam2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SepaktakrawTeam2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SepaktakrawTeam2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
