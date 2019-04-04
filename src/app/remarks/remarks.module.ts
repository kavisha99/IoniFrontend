import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {MatTreeModule, MatTreeFlatDataSource, MatTree} from '@angular/material/tree';
import { MatIconModule } from "@angular/material/icon";

import { IonicModule } from '@ionic/angular';

import { RemarksPage } from './remarks.page';

const routes: Routes = [
  {
    path: '',
    component: RemarksPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatTreeModule ,
    MatIconModule],
  declarations: [RemarksPage]
})
export class RemarksPageModule {}
