import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepakbolaTeam5Component } from './sepakbola-team5.component';

describe('SepakbolaTeam5Component', () => {
  let component: SepakbolaTeam5Component;
  let fixture: ComponentFixture<SepakbolaTeam5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SepakbolaTeam5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SepakbolaTeam5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
