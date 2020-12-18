import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepakbolaComponent } from './sepakbola.component';

describe('SepakbolaComponent', () => {
  let component: SepakbolaComponent;
  let fixture: ComponentFixture<SepakbolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SepakbolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SepakbolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
