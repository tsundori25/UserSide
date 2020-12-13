import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBadmintonComponent } from './info-badminton.component';

describe('InfoBadmintonComponent', () => {
  let component: InfoBadmintonComponent;
  let fixture: ComponentFixture<InfoBadmintonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoBadmintonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBadmintonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
