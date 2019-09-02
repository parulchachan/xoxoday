import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomatedGreetingComponent } from './automated-greeting.component';

describe('AutomatedGreetingComponent', () => {
  let component: AutomatedGreetingComponent;
  let fixture: ComponentFixture<AutomatedGreetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomatedGreetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomatedGreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
