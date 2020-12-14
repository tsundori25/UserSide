import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepaktakrawTeam8Component } from './sepaktakraw-team8.component';

describe('SepaktakrawTeam8Component', () => {
  let component: SepaktakrawTeam8Component;
  let fixture: ComponentFixture<SepaktakrawTeam8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SepaktakrawTeam8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SepaktakrawTeam8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
