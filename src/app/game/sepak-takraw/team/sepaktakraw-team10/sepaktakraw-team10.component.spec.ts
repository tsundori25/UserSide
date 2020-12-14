import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepaktakrawTeam10Component } from './sepaktakraw-team10.component';

describe('SepaktakrawTeam10Component', () => {
  let component: SepaktakrawTeam10Component;
  let fixture: ComponentFixture<SepaktakrawTeam10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SepaktakrawTeam10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SepaktakrawTeam10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
