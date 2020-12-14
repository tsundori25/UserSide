import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalapkelerengTeam2Component } from './balapkelereng-team2.component';

describe('BalapkelerengTeam2Component', () => {
  let component: BalapkelerengTeam2Component;
  let fixture: ComponentFixture<BalapkelerengTeam2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalapkelerengTeam2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalapkelerengTeam2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
