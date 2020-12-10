import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBolavoliComponent } from './register-bolavoli.component';

describe('RegisterBolavoliComponent', () => {
  let component: RegisterBolavoliComponent;
  let fixture: ComponentFixture<RegisterBolavoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterBolavoliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBolavoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
