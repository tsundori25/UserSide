import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepaktakrawTeam3Component } from './sepaktakraw-team3.component';

describe('SepaktakrawTeam3Component', () => {
  let component: SepaktakrawTeam3Component;
  let fixture: ComponentFixture<SepaktakrawTeam3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SepaktakrawTeam3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SepaktakrawTeam3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
