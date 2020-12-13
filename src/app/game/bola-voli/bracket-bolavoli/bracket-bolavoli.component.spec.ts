import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BracketBolavoliComponent } from './bracket-bolavoli.component';

describe('BracketBolavoliComponent', () => {
  let component: BracketBolavoliComponent;
  let fixture: ComponentFixture<BracketBolavoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BracketBolavoliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BracketBolavoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
