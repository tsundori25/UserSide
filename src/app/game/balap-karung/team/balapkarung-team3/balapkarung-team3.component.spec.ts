import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalapkarungTeam3Component } from './balapkarung-team3.component';

describe('BalapkarungTeam3Component', () => {
  let component: BalapkarungTeam3Component;
  let fixture: ComponentFixture<BalapkarungTeam3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalapkarungTeam3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalapkarungTeam3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
