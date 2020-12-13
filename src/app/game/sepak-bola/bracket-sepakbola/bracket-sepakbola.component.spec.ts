import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BracketSepakbolaComponent } from './bracket-sepakbola.component';

describe('BracketSepakbolaComponent', () => {
  let component: BracketSepakbolaComponent;
  let fixture: ComponentFixture<BracketSepakbolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BracketSepakbolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BracketSepakbolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
