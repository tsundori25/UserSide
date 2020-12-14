import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepaktakrawTeam7Component } from './sepaktakraw-team7.component';

describe('SepaktakrawTeam7Component', () => {
  let component: SepaktakrawTeam7Component;
  let fixture: ComponentFixture<SepaktakrawTeam7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SepaktakrawTeam7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SepaktakrawTeam7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
