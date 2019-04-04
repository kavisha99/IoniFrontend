import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'log-in-page',
    loadChildren: './log-in-page/log-in-page.module#LogInPagePageModule'
  },
  {
    path: 'parent-dash-board-page',
    loadChildren: './parent-dash-board-page/parent-dash-board-page.module#ParentDashBoardPagePageModule' 
  },
  {
     path: 'teacher-dash-board', 
    loadChildren: './teacher-dash-board/teacher-dash-board.module#TeacherDashBoardPageModule' },

  {
     path: 'forget-password', 
    loadChildren: './forget-password/forget-password.module#ForgetPasswordPageModule' 
  },
  {
    path: 'photo-gallery',
   loadChildren: './photo-gallery/photo-gallery.module#PhotoGalleryPageModule'
  },
  { 
    path: 'notes', 
    loadChildren: './notes/notes.module#NotesPageModule' 
  },
  { path: 'homework', 
    loadChildren: './homework/homework.module#HomeworkPageModule'
 },
  { path: 'openpdf', loadChildren: './openpdf/openpdf.module#OpenpdfPageModule' },
  { path: 'past-papers', loadChildren: './past-papers/past-papers.module#PastPapersPageModule' },
  { path: 'timetable', loadChildren: './timetable/timetable.module#TimetablePageModule' },
  { path: 'leave', loadChildren: './leave/leave.module#LeavePageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#PROFILEPageModule' },
  { path: 'changepassword', loadChildren: './changepassword/changepassword.module#ChangepasswordPageModule' },
  { path: 'remarks', loadChildren: './remarks/remarks.module#RemarksPageModule' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
