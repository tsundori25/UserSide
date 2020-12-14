import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolavoliTeam4Component } from './bolavoli-team4.component';

describe('BolavoliTeam4Component', () => {
  let component: BolavoliTeam4Component;
  let fixture: ComponentFixture<BolavoliTeam4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolavoliTeam4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BolavoliTeam4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
