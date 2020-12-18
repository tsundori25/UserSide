import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolavoliComponent } from './bolavoli.component';

describe('BolavoliComponent', () => {
  let component: BolavoliComponent;
  let fixture: ComponentFixture<BolavoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolavoliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BolavoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
