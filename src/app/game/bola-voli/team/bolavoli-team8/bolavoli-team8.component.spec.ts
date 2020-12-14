import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolavoliTeam8Component } from './bolavoli-team8.component';

describe('BolavoliTeam8Component', () => {
  let component: BolavoliTeam8Component;
  let fixture: ComponentFixture<BolavoliTeam8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolavoliTeam8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BolavoliTeam8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
