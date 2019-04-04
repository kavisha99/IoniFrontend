import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Student } from "Classes/Student";
import { LoginServicesService } from "../Services/login-services.service";

@Component({
  selector: 'app-parent-dash-board-page',
  templateUrl: './parent-dash-board-page.page.html',
  styleUrls: ['./parent-dash-board-page.page.scss'],
})
export class ParentDashBoardPagePage implements OnInit {

  constructor(private _router:Router,private _ser:LoginServicesService) { }
  user_id:string=localStorage.getItem('user_id');
  stu_arr:Student[];
  name:string;
  class:number;
  div:string;
  rollno:number;
  path:string=localStorage.getItem('img_path');
  ngOnInit() {

    // this._ser.getstudent().subscribe(
    //   (data:Student[])=>{
    //     console.log(data);
    //   }
    // );

    this._ser.getStudentByUserId(this.user_id).subscribe(
      (data:Student[])=>{
        localStorage.setItem('s_class',data[0].s_class.toString());
        console.log(data);
        this.stu_arr=data;
      }
    )
  }

  onHomeWork(){
   this._router.navigate(['/homework']);
  
  }

  onLeave(){
    this._router.navigate(['/leave']);
  }

  onMyprofile(){
    this._router.navigate(['/profile']);
  }
  onNotes(){
    this._router.navigate(['/notes']);
  }
  onNotice(){
    this._router.navigate(['/']);
  }
  onAttendance(){
    this._router.navigate(['/homework']);
  }
  onRemark(){
    this._router.navigate(['/homework']);
  }
  onSyllabus(){
    this._router.navigate(['/']);
  }
  onExamresult(){
    this._router.navigate(['/']);
  }
  onClassAssignment(){
    this._router.navigate(['/homework']);
  }
  onTimetable(){
    this._router.navigate(['/timetable']);
  }
  onPastpapers(){
    this._router.navigate(['/past-papers']);
  }
  onPhotoGallery(){
    this._router.navigate(['/photo-gallery']);
  }
  onTeacherInteraction(){
    this._router.navigate(['/homework']);
  }
  onMyleave(){
    this._router.navigate(['/leave']);
  }
  onLocation(){
    this._router.navigate(['/homework']);
  }
}
