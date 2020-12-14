import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalapkelerengTeam4Component } from './balapkelereng-team4.component';

describe('BalapkelerengTeam4Component', () => {
  let component: BalapkelerengTeam4Component;
  let fixture: ComponentFixture<BalapkelerengTeam4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalapkelerengTeam4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalapkelerengTeam4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
