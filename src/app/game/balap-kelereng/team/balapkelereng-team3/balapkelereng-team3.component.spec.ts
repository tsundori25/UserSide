import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalapkelerengTeam3Component } from './balapkelereng-team3.component';

describe('BalapkelerengTeam3Component', () => {
  let component: BalapkelerengTeam3Component;
  let fixture: ComponentFixture<BalapkelerengTeam3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalapkelerengTeam3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalapkelerengTeam3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
