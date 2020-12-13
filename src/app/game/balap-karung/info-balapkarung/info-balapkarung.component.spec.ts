import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBalapkarungComponent } from './info-balapkarung.component';

describe('InfoBalapkarungComponent', () => {
  let component: InfoBalapkarungComponent;
  let fixture: ComponentFixture<InfoBalapkarungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoBalapkarungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBalapkarungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
