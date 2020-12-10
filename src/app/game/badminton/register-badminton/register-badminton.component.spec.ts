import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBadmintonComponent } from './register-badminton.component';

describe('RegisterBadmintonComponent', () => {
  let component: RegisterBadmintonComponent;
  let fixture: ComponentFixture<RegisterBadmintonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterBadmintonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBadmintonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
