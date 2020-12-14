import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolavoliTeam10Component } from './bolavoli-team10.component';

describe('BolavoliTeam10Component', () => {
  let component: BolavoliTeam10Component;
  let fixture: ComponentFixture<BolavoliTeam10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolavoliTeam10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BolavoliTeam10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
