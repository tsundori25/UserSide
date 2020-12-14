import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalapkarungTeam7Component } from './balapkarung-team7.component';

describe('BalapkarungTeam7Component', () => {
  let component: BalapkarungTeam7Component;
  let fixture: ComponentFixture<BalapkarungTeam7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalapkarungTeam7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalapkarungTeam7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
