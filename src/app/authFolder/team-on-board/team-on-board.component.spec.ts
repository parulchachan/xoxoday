import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamOnBoardComponent } from './team-on-board.component';

describe('TeamOnBoardComponent', () => {
  let component: TeamOnBoardComponent;
  let fixture: ComponentFixture<TeamOnBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamOnBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamOnBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
