import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalapkelerengTeam8Component } from './balapkelereng-team8.component';

describe('BalapkelerengTeam8Component', () => {
  let component: BalapkelerengTeam8Component;
  let fixture: ComponentFixture<BalapkelerengTeam8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalapkelerengTeam8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalapkelerengTeam8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
