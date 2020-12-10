import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBalapkarungComponent } from './register-balapkarung.component';

describe('RegisterBalapkarungComponent', () => {
  let component: RegisterBalapkarungComponent;
  let fixture: ComponentFixture<RegisterBalapkarungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterBalapkarungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBalapkarungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
