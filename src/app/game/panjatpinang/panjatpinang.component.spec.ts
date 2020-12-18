import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanjatpinangComponent } from './panjatpinang.component';

describe('PanjatpinangComponent', () => {
  let component: PanjatpinangComponent;
  let fixture: ComponentFixture<PanjatpinangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanjatpinangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanjatpinangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
