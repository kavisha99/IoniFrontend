import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInPagePage } from './log-in-page.page';

describe('LogInPagePage', () => {
  let component: LogInPagePage;
  let fixture: ComponentFixture<LogInPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
