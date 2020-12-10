import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSepakbolaComponent } from './register-sepakbola.component';

describe('RegisterSepakbolaComponent', () => {
  let component: RegisterSepakbolaComponent;
  let fixture: ComponentFixture<RegisterSepakbolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSepakbolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSepakbolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
