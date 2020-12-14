import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolavoliTeam3Component } from './bolavoli-team3.component';

describe('BolavoliTeam3Component', () => {
  let component: BolavoliTeam3Component;
  let fixture: ComponentFixture<BolavoliTeam3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolavoliTeam3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BolavoliTeam3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
