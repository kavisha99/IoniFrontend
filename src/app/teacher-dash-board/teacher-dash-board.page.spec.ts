import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherDashBoardPage } from './teacher-dash-board.page';

describe('TeacherDashBoardPage', () => {
  let component: TeacherDashBoardPage;
  let fixture: ComponentFixture<TeacherDashBoardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherDashBoardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherDashBoardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
