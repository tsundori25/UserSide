import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolavoliTeam5Component } from './bolavoli-team5.component';

describe('BolavoliTeam5Component', () => {
  let component: BolavoliTeam5Component;
  let fixture: ComponentFixture<BolavoliTeam5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolavoliTeam5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BolavoliTeam5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
