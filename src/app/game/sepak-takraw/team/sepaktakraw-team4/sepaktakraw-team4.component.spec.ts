import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepaktakrawTeam4Component } from './sepaktakraw-team4.component';

describe('SepaktakrawTeam4Component', () => {
  let component: SepaktakrawTeam4Component;
  let fixture: ComponentFixture<SepaktakrawTeam4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SepaktakrawTeam4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SepaktakrawTeam4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
