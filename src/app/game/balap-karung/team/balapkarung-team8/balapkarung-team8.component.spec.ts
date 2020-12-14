import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalapkarungTeam8Component } from './balapkarung-team8.component';

describe('BalapkarungTeam8Component', () => {
  let component: BalapkarungTeam8Component;
  let fixture: ComponentFixture<BalapkarungTeam8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalapkarungTeam8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalapkarungTeam8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
