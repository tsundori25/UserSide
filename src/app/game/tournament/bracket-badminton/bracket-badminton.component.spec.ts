import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BracketBadmintonComponent } from './bracket-badminton.component';

describe('BracketBadmintonComponent', () => {
  let component: BracketBadmintonComponent;
  let fixture: ComponentFixture<BracketBadmintonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BracketBadmintonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BracketBadmintonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
