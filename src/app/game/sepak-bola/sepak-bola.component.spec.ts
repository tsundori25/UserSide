import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepakBolaComponent } from './sepak-bola.component';

describe('SepakBolaComponent', () => {
  let component: SepakBolaComponent;
  let fixture: ComponentFixture<SepakBolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SepakBolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SepakBolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
