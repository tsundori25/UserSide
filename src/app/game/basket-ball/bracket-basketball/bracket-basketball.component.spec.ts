import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BracketBasketballComponent } from './bracket-basketball.component';

describe('BracketBasketballComponent', () => {
  let component: BracketBasketballComponent;
  let fixture: ComponentFixture<BracketBasketballComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BracketBasketballComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BracketBasketballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
