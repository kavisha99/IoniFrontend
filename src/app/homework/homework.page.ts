import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HomeworkServiceService } from '../Services/homework-service.service';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.page.html',
  styleUrls: ['./homework.page.scss'],
})
export class HomeworkPage implements OnInit {
  user_id:string;
  class_id:number;
  div:string;
  hw_arr:any[];
  constructor(public _router:Router,public _ser:HomeworkServiceService) { }

  ngOnInit() {
    this.user_id=localStorage.getItem('user_id');
    this.class_id=parseInt(localStorage.getItem('class'));
    this.div=localStorage.getItem('div');
    this._ser.onhomework(this.class_id,this.div).subscribe(
      (data:any[])=>{
        console.log(data);
        this.hw_arr=data;
      }
    )
    
  }
  
  
}
