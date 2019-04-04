import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {MatInputModule,MatIconModule,MatTableModule,MatFormFieldModule,MatButtonModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';



import { IonicModule } from '@ionic/angular';

import { LogInPagePage } from './log-in-page.page';

const routes: Routes = [
  {
    path: '',
    component: LogInPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  declarations: [LogInPagePage]
})
export class LogInPagePageModule {}
