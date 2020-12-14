import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalapkarungTeam9Component } from './balapkarung-team9.component';

describe('BalapkarungTeam9Component', () => {
  let component: BalapkarungTeam9Component;
  let fixture: ComponentFixture<BalapkarungTeam9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalapkarungTeam9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalapkarungTeam9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
