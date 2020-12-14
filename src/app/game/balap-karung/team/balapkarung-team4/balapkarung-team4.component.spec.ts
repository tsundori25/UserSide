import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalapkarungTeam4Component } from './balapkarung-team4.component';

describe('BalapkarungTeam4Component', () => {
  let component: BalapkarungTeam4Component;
  let fixture: ComponentFixture<BalapkarungTeam4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalapkarungTeam4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalapkarungTeam4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
