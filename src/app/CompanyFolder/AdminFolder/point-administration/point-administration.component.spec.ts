import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointAdministrationComponent } from './point-administration.component';

describe('PointAdministrationComponent', () => {
  let component: PointAdministrationComponent;
  let fixture: ComponentFixture<PointAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
