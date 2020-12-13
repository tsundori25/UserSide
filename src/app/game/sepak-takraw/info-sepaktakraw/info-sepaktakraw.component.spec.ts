import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSepaktakrawComponent } from './info-sepaktakraw.component';

describe('InfoSepaktakrawComponent', () => {
  let component: InfoSepaktakrawComponent;
  let fixture: ComponentFixture<InfoSepaktakrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSepaktakrawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSepaktakrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
