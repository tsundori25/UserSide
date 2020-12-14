import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolavoliTeam7Component } from './bolavoli-team7.component';

describe('BolavoliTeam7Component', () => {
  let component: BolavoliTeam7Component;
  let fixture: ComponentFixture<BolavoliTeam7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolavoliTeam7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BolavoliTeam7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
