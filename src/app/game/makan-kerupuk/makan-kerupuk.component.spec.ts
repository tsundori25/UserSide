import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakanKerupukComponent } from './makan-kerupuk.component';

describe('MakanKerupukComponent', () => {
  let component: MakanKerupukComponent;
  let fixture: ComponentFixture<MakanKerupukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakanKerupukComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakanKerupukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
