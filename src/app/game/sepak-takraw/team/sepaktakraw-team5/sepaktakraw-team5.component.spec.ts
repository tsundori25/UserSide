import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepaktakrawTeam5Component } from './sepaktakraw-team5.component';

describe('SepaktakrawTeam5Component', () => {
  let component: SepaktakrawTeam5Component;
  let fixture: ComponentFixture<SepaktakrawTeam5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SepaktakrawTeam5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SepaktakrawTeam5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
