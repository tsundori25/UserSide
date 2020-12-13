import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMakankerupukComponent } from './info-makankerupuk.component';

describe('InfoMakankerupukComponent', () => {
  let component: InfoMakankerupukComponent;
  let fixture: ComponentFixture<InfoMakankerupukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoMakankerupukComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoMakankerupukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
