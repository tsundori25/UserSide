import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepakTakrawComponent } from './sepak-takraw.component';

describe('SepakTakrawComponent', () => {
  let component: SepakTakrawComponent;
  let fixture: ComponentFixture<SepakTakrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SepakTakrawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SepakTakrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
