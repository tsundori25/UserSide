import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalapKelerengComponent } from './balap-kelereng.component';

describe('BalapKelerengComponent', () => {
  let component: BalapKelerengComponent;
  let fixture: ComponentFixture<BalapKelerengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalapKelerengComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalapKelerengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
