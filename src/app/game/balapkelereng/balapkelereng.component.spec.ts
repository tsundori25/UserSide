import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalapkelerengComponent } from './balapkelereng.component';

describe('BalapkelerengComponent', () => {
  let component: BalapkelerengComponent;
  let fixture: ComponentFixture<BalapkelerengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalapkelerengComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalapkelerengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
