import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalapkelerengTeam6Component } from './balapkelereng-team6.component';

describe('BalapkelerengTeam6Component', () => {
  let component: BalapkelerengTeam6Component;
  let fixture: ComponentFixture<BalapkelerengTeam6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalapkelerengTeam6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalapkelerengTeam6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
