import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolavoliTeam1Component } from './bolavoli-team1.component';

describe('BolavoliTeam1Component', () => {
  let component: BolavoliTeam1Component;
  let fixture: ComponentFixture<BolavoliTeam1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolavoliTeam1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BolavoliTeam1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
