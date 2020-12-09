import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakankerupukComponent } from './makankerupuk.component';

describe('MakankerupukComponent', () => {
  let component: MakankerupukComponent;
  let fixture: ComponentFixture<MakankerupukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakankerupukComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakankerupukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
