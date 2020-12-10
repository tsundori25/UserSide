import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSepaktakrawComponent } from './register-sepaktakraw.component';

describe('RegisterSepaktakrawComponent', () => {
  let component: RegisterSepaktakrawComponent;
  let fixture: ComponentFixture<RegisterSepaktakrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSepaktakrawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSepaktakrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
