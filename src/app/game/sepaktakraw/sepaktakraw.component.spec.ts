import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepaktakrawComponent } from './sepaktakraw.component';

describe('SepaktakrawComponent', () => {
  let component: SepaktakrawComponent;
  let fixture: ComponentFixture<SepaktakrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SepaktakrawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SepaktakrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
