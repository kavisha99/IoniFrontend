import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentTimetableService } from "../Services/student-timetable.service";
import { stu_timetable_class } from "Classes/stu_timetable";

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.page.html',
  styleUrls: ['./timetable.page.scss'],
})
export class TimetablePage implements OnInit {
  user_id:number=parseInt(localStorage.getItem('user_id'));
  class_id:number;
  stu_timetable_arr:stu_timetable_class[];
  path:string;
  constructor(private _ser:StudentTimetableService,private _route:Router,) { }

  ngOnInit() {
    this.class_id=parseInt(localStorage.getItem('s_class'));
    console.log('class id of timetable: '+this.class_id);
    this._ser.getStuTimetableByClassId(this.class_id).subscribe(
      (data:stu_timetable_class[])=>{
        console.log(data);
        this.stu_timetable_arr=data;
      }
    )
  }

}
