import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolaVoliComponent } from './bola-voli.component';

describe('BolaVoliComponent', () => {
  let component: BolaVoliComponent;
  let fixture: ComponentFixture<BolaVoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolaVoliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BolaVoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
