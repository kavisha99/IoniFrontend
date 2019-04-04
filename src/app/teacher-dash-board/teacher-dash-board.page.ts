import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { HomeworkPage } from '../homework/homework.page';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-teacher-dash-board',
  templateUrl: './teacher-dash-board.page.html',
  styleUrls: ['./teacher-dash-board.page.scss'],
})
export class TeacherDashBoardPage implements OnInit {

  constructor(private _router:Router,public _navctrl:NavController) { }

  ngOnInit() {
  }
  onHomeWork(){
    this._router.navigate(['/homework']);
   
   }
 
   onLeave(){
     this._router.navigate(['/homework']);
   }
 
   onMyprofile(){
     this._router.navigate(['/homework']);
   }
   onNotes(){
     this._router.navigate(['/notes']);
   }
   onNotice(){
     this._router.navigate(['/homework']);
   }
   onAttendance(){
     this._router.navigate(['/homework']);
   }
   onRemark(){
     this._router.navigate(['/homework']);
   }
   onSyllabus(){
     this._router.navigate['/homework'];
   }
   onExamresult(){
     this._router.navigate(['/homework']);
   }
   onClassAssignment(){
     this._router.navigate(['/homework']);
   }
   onTimetable(){
     this._router.navigate(['/homework']);
   }
   onPastpapers(){
     this._router.navigate(['/homework']);
   }
   onPhotoGallery(){
     this._router.navigate(['/photo-gallery']);
   }
   onTeacherInteraction(){
     this._router.navigate(['/homework']);
   }
   onMyleave(){
     this._router.navigate(['/homework']);
   }
   onLocation(){
     this._router.navigate(['/homework']);
   }

}
