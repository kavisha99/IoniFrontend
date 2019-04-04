import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PROFILEPage } from './profile.page';

describe('PROFILEPage', () => {
  let component: PROFILEPage;
  let fixture: ComponentFixture<PROFILEPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PROFILEPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PROFILEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
