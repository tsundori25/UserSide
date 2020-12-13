import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BracketBalapkelerengComponent } from './bracket-balapkelereng.component';

describe('BracketBalapkelerengComponent', () => {
  let component: BracketBalapkelerengComponent;
  let fixture: ComponentFixture<BracketBalapkelerengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BracketBalapkelerengComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BracketBalapkelerengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
