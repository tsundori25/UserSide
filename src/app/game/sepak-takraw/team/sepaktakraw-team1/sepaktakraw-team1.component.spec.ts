import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepaktakrawTeam1Component } from './sepaktakraw-team1.component';

describe('SepaktakrawTeam1Component', () => {
  let component: SepaktakrawTeam1Component;
  let fixture: ComponentFixture<SepaktakrawTeam1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SepaktakrawTeam1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SepaktakrawTeam1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
