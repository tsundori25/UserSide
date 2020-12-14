import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalapkelerengTeam1Component } from './balapkelereng-team1.component';

describe('BalapkelerengTeam1Component', () => {
  let component: BalapkelerengTeam1Component;
  let fixture: ComponentFixture<BalapkelerengTeam1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalapkelerengTeam1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalapkelerengTeam1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
