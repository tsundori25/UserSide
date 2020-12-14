import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepaktakrawTeam6Component } from './sepaktakraw-team6.component';

describe('SepaktakrawTeam6Component', () => {
  let component: SepaktakrawTeam6Component;
  let fixture: ComponentFixture<SepaktakrawTeam6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SepaktakrawTeam6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SepaktakrawTeam6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
