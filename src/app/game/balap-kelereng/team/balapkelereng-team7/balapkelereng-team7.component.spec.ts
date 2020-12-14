import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalapkelerengTeam7Component } from './balapkelereng-team7.component';

describe('BalapkelerengTeam7Component', () => {
  let component: BalapkelerengTeam7Component;
  let fixture: ComponentFixture<BalapkelerengTeam7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalapkelerengTeam7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalapkelerengTeam7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
