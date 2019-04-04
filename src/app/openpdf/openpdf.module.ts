import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {MatInputModule,MatIconModule,MatTableModule,MatFormFieldModule,MatButtonModule} from '@angular/material';

import { IonicModule } from '@ionic/angular';

import { OpenpdfPage } from './openpdf.page';

const routes: Routes = [
  {
    path: '',
    component: OpenpdfPage
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
    MatButtonModule
  ],
  declarations: [OpenpdfPage]
})
export class OpenpdfPageModule {}
