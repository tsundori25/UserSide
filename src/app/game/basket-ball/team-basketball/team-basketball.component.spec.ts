import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamBasketballComponent } from './team-basketball.component';

describe('TeamBasketballComponent', () => {
  let component: TeamBasketballComponent;
  let fixture: ComponentFixture<TeamBasketballComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamBasketballComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamBasketballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
