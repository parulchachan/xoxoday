import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainTownhallComponent } from './domain-townhall.component';

describe('DomainTownhallComponent', () => {
  let component: DomainTownhallComponent;
  let fixture: ComponentFixture<DomainTownhallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomainTownhallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainTownhallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
