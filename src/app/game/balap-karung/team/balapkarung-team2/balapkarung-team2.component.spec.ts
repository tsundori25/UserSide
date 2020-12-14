import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalapkarungTeam2Component } from './balapkarung-team2.component';

describe('BalapkarungTeam2Component', () => {
  let component: BalapkarungTeam2Component;
  let fixture: ComponentFixture<BalapkarungTeam2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalapkarungTeam2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalapkarungTeam2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
