import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalapkelerengTeam10Component } from './balapkelereng-team10.component';

describe('BalapkelerengTeam10Component', () => {
  let component: BalapkelerengTeam10Component;
  let fixture: ComponentFixture<BalapkelerengTeam10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalapkelerengTeam10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalapkelerengTeam10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
