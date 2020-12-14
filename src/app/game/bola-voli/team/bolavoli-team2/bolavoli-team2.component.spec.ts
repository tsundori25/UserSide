import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolavoliTeam2Component } from './bolavoli-team2.component';

describe('BolavoliTeam2Component', () => {
  let component: BolavoliTeam2Component;
  let fixture: ComponentFixture<BolavoliTeam2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolavoliTeam2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BolavoliTeam2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
