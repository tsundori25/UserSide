import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalapkarungTeam6Component } from './balapkarung-team6.component';

describe('BalapkarungTeam6Component', () => {
  let component: BalapkarungTeam6Component;
  let fixture: ComponentFixture<BalapkarungTeam6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalapkarungTeam6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalapkarungTeam6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
