import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalapKarungComponent } from './balap-karung.component';

describe('BalapKarungComponent', () => {
  let component: BalapKarungComponent;
  let fixture: ComponentFixture<BalapKarungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalapKarungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalapKarungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
