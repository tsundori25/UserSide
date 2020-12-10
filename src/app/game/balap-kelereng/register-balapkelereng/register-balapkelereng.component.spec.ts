import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBalapkelerengComponent } from './register-balapkelereng.component';

describe('RegisterBalapkelerengComponent', () => {
  let component: RegisterBalapkelerengComponent;
  let fixture: ComponentFixture<RegisterBalapkelerengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterBalapkelerengComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBalapkelerengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
