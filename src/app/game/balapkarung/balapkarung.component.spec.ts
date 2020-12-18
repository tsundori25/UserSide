import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalapkarungComponent } from './balapkarung.component';

describe('BalapkarungComponent', () => {
  let component: BalapkarungComponent;
  let fixture: ComponentFixture<BalapkarungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalapkarungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalapkarungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
