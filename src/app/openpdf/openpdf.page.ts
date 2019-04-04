import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginServicesService } from '../Services/login-services.service';
import { User } from '../../../Classes/User';

@Component({
  selector: 'app-openpdf',
  templateUrl: './openpdf.page.html',
  styleUrls: ['./openpdf.page.scss'],
})
export class OpenpdfPage implements OnInit {
  flag:boolean=true;
  user_id:string;
  password:string;
  user_type:string;
  usertype:string[]=[
    'Parent',
    'Teacher',
    'Admin'
  ];
  constructor(private _service:LoginServicesService,
    private _route:Router) { }

  ngOnInit() {
  }

  onSign(){
    this._route.navigate(['/signup']);
  }

  onLogin(){
    this._service.onLogin(new User(this.user_id,this.password,this.user_type)).subscribe(
      (data:User[])=>{
        if(data.length>0){
          this.user_type=data[0].user_type;
          
          if(this.user_type=="Parent"){
            localStorage.setItem('user_id',this.user_id);
           // this._route.navigate(['/RetailerMenu']);
           console.log("suceesfully");
           this._route.navigate(['/parent-dash-board-page']);
          }
        }
      }
    );
  }

}
  