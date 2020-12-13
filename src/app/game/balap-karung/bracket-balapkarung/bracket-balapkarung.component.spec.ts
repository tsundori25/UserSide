import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BracketBalapkarungComponent } from './bracket-balapkarung.component';

describe('BracketBalapkarungComponent', () => {
  let component: BracketBalapkarungComponent;
  let fixture: ComponentFixture<BracketBalapkarungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BracketBalapkarungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BracketBalapkarungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
