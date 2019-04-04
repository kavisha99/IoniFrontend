import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TeacherDashBoardPage } from './teacher-dash-board.page';

const routes: Routes = [
  {
    path: '',
    component: TeacherDashBoardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TeacherDashBoardPage]
})
export class TeacherDashBoardPageModule {}
