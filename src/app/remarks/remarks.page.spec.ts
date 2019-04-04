import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemarksPage } from './remarks.page';

describe('RemarksPage', () => {
  let component: RemarksPage;
  let fixture: ComponentFixture<RemarksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemarksPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemarksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
