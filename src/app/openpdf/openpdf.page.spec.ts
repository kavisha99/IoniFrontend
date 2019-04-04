import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenpdfPage } from './openpdf.page';

describe('OpenpdfPage', () => {
  let component: OpenpdfPage;
  let fixture: ComponentFixture<OpenpdfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenpdfPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenpdfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
