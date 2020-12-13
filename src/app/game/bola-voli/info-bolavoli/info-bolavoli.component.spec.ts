import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBolavoliComponent } from './info-bolavoli.component';

describe('InfoBolavoliComponent', () => {
  let component: InfoBolavoliComponent;
  let fixture: ComponentFixture<InfoBolavoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoBolavoliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBolavoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
