import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepaktakrawTeam9Component } from './sepaktakraw-team9.component';

describe('SepaktakrawTeam9Component', () => {
  let component: SepaktakrawTeam9Component;
  let fixture: ComponentFixture<SepaktakrawTeam9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SepaktakrawTeam9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SepaktakrawTeam9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
