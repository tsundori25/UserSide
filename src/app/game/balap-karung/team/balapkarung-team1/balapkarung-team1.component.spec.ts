import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalapkarungTeam1Component } from './balapkarung-team1.component';

describe('BalapkarungTeam1Component', () => {
  let component: BalapkarungTeam1Component;
  let fixture: ComponentFixture<BalapkarungTeam1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalapkarungTeam1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalapkarungTeam1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
