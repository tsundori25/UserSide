import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalapkarungTeam5Component } from './balapkarung-team5.component';

describe('BalapkarungTeam5Component', () => {
  let component: BalapkarungTeam5Component;
  let fixture: ComponentFixture<BalapkarungTeam5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalapkarungTeam5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalapkarungTeam5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
