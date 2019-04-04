import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// import { File } from '@ionic-native/File/ngx';

import { IonicModule } from '@ionic/angular';

import { NotesPage } from './notes.page';


const routes: Routes = [
  {
    path: '',
    component: NotesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  declarations: [NotesPage]
})
export class NotesPageModule {}
