import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalapkelerengTeam5Component } from './balapkelereng-team5.component';

describe('BalapkelerengTeam5Component', () => {
  let component: BalapkelerengTeam5Component;
  let fixture: ComponentFixture<BalapkelerengTeam5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalapkelerengTeam5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalapkelerengTeam5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
