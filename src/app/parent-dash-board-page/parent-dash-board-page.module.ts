import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

import { IonicModule } from '@ionic/angular';

import { ParentDashBoardPagePage } from './parent-dash-board-page.page';

const routes: Routes = [
  {
    path: '',
    component: ParentDashBoardPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatGridListModule,
    MatCardModule
  ],
  declarations: [ParentDashBoardPagePage]
})
export class ParentDashBoardPagePageModule {}
