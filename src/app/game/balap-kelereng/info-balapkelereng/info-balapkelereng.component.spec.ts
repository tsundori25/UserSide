import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBalapkelerengComponent } from './info-balapkelereng.component';

describe('InfoBalapkelerengComponent', () => {
  let component: InfoBalapkelerengComponent;
  let fixture: ComponentFixture<InfoBalapkelerengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoBalapkelerengComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBalapkelerengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
