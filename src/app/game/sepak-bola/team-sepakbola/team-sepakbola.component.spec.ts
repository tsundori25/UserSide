import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamSepakbolaComponent } from './team-sepakbola.component';

describe('TeamSepakbolaComponent', () => {
  let component: TeamSepakbolaComponent;
  let fixture: ComponentFixture<TeamSepakbolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamSepakbolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamSepakbolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
