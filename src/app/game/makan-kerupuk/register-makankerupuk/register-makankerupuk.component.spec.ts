import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMakankerupukComponent } from './register-makankerupuk.component';

describe('RegisterMakankerupukComponent', () => {
  let component: RegisterMakankerupukComponent;
  let fixture: ComponentFixture<RegisterMakankerupukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterMakankerupukComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterMakankerupukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
