import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalapkarungTeam10Component } from './balapkarung-team10.component';

describe('BalapkarungTeam10Component', () => {
  let component: BalapkarungTeam10Component;
  let fixture: ComponentFixture<BalapkarungTeam10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalapkarungTeam10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalapkarungTeam10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
