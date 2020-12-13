import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSepakbolaComponent } from './info-sepakbola.component';

describe('InfoSepakbolaComponent', () => {
  let component: InfoSepakbolaComponent;
  let fixture: ComponentFixture<InfoSepakbolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSepakbolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSepakbolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
