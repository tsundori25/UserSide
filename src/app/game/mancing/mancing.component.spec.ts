import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MancingComponent } from './mancing.component';

describe('MancingComponent', () => {
  let component: MancingComponent;
  let fixture: ComponentFixture<MancingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MancingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MancingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
