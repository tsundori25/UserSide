import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BracketSepaktakrawComponent } from './bracket-sepaktakraw.component';

describe('BracketSepaktakrawComponent', () => {
  let component: BracketSepaktakrawComponent;
  let fixture: ComponentFixture<BracketSepaktakrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BracketSepaktakrawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BracketSepaktakrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
