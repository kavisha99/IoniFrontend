import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginServicesService } from "../../app/Services/login-services.service";
import { Student } from 'Classes/Student';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class PROFILEPage implements OnInit {
  stu_arr:Student[];
  user_id:string=localStorage.getItem('user_id');
  path:string;
  constructor(public _router:Router,private _ser:LoginServicesService) { }

  ngOnInit() {
    this._ser.getStudentByUserId(this.user_id).subscribe(
      (data:Student[])=>{
        this.path=data[0].s_profilepic;
        this.stu_arr=data;
      }
    )
  }

}
