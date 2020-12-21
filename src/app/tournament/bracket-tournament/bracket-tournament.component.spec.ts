import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BracketTournamentComponent } from './bracket-tournament.component';

describe('BracketTournamentComponent', () => {
  let component: BracketTournamentComponent;
  let fixture: ComponentFixture<BracketTournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BracketTournamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BracketTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
