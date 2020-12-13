import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBasketballComponent } from './info-basketball.component';

describe('InfoBasketballComponent', () => {
  let component: InfoBasketballComponent;
  let fixture: ComponentFixture<InfoBasketballComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoBasketballComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBasketballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
