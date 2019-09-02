import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveAwardComponent } from './give-award.component';

describe('GiveAwardComponent', () => {
  let component: GiveAwardComponent;
  let fixture: ComponentFixture<GiveAwardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveAwardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveAwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
