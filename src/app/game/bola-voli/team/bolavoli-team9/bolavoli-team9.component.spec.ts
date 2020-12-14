import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolavoliTeam9Component } from './bolavoli-team9.component';

describe('BolavoliTeam9Component', () => {
  let component: BolavoliTeam9Component;
  let fixture: ComponentFixture<BolavoliTeam9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolavoliTeam9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BolavoliTeam9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
