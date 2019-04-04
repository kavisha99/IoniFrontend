import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastPapersPage } from './past-papers.page';

describe('PastPapersPage', () => {
  let component: PastPapersPage;
  let fixture: ComponentFixture<PastPapersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastPapersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastPapersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
