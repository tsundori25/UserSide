import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolavoliTeam6Component } from './bolavoli-team6.component';

describe('BolavoliTeam6Component', () => {
  let component: BolavoliTeam6Component;
  let fixture: ComponentFixture<BolavoliTeam6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolavoliTeam6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BolavoliTeam6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
