import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BracketMakankerupukComponent } from './bracket-makankerupuk.component';

describe('BracketMakankerupukComponent', () => {
  let component: BracketMakankerupukComponent;
  let fixture: ComponentFixture<BracketMakankerupukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BracketMakankerupukComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BracketMakankerupukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
