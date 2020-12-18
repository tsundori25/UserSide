import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Banner5Component } from './banner5.component';

describe('Banner5Component', () => {
  let component: Banner5Component;
  let fixture: ComponentFixture<Banner5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Banner5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Banner5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
