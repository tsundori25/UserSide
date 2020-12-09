import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoliComponent } from './voli.component';

describe('VoliComponent', () => {
  let component: VoliComponent;
  let fixture: ComponentFixture<VoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
