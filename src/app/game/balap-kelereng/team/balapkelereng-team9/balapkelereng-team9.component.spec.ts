import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalapkelerengTeam9Component } from './balapkelereng-team9.component';

describe('BalapkelerengTeam9Component', () => {
  let component: BalapkelerengTeam9Component;
  let fixture: ComponentFixture<BalapkelerengTeam9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalapkelerengTeam9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalapkelerengTeam9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
