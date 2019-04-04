import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginServicesService } from "../../app/Services/login-services.service";
import { Validators, FormBuilder, FormGroup, FormControl, ControlContainer } from '@angular/forms';
import { User } from 'Classes/User';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.page.html',
  styleUrls: ['./log-in-page.page.scss'],
})
export class LogInPagePage implements OnInit {
  myForm:FormGroup;
  user_id:FormControl;
  user_password:FormControl;
  usertype_arr:string[]=['Parent','Teacher','Admin'];
  user_type:FormControl;
  userData={"user_id":"","user_password":"","user_type":""};
  userid:string;
  userpassword:string;
  usertype:string;
  // u_password:string;
  // flag:boolean=true;
  
  constructor(public _router:Router,private _ser:LoginServicesService) { 
  
  }
  
  ngOnInit() {
   this.myForm=new FormGroup({
    user_id:new FormControl('',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(8)]),
    user_password:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(12)]),
    user_type:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
   });
  }
  
  
  public type = 'password';
  public icon:String="eye";
  userType:String;
  public showPass = false; 
  flag:boolean=true;
  password:String;
  userId:string;
  
  

  showPassword() 
  {
    this.showPass = !this.showPass;
 
    if(this.showPass){
      this.icon="eye-off";
      this.type = 'text';
    } 
    else {
      this.icon="eye";
      this.type = 'password';
    }
  }
  
  login()
  {
    this._ser.onLogin(new User(this.user_id.toString(),this.user_password.toString(),this.user_type.toString())).subscribe(
      (data:User[])=>{
        localStorage.setItem('user_id',this.user_id.toString());
        console.log(data);
        if(data.length==1){
          alert('Login Successfully!!!');
          if(this.user_type.toString()=="Teacher")
          {
            this._router.navigate(['teacher-dash-board']);
          }
          else if(this.user_type.toString()=="Admin")
          {
            this._router.navigate(['parent-dash-board-page']);
          }
          else
          {
            this._router.navigate(['parent-dash-board-page']);
          }
      
          console.log(data.length);
          // this._router.navigate(['/']);
        }
        else{
          alert('Wrong email or password!!!');
        }

        }

    );


    this._ser.getStudentByUserId(this.user_id.toString()).subscribe(
      (data:any[])=>{
        localStorage.setItem('class',data[0].s_class.toString());
        localStorage.setItem('img_path',data[0].s_profilepic);
        localStorage.setItem('div',data[0].s_div);
        console.log(data[0].s_class);
      }
    );
  }

  exampleValidator(control:FormControl):{[s: string]: boolean}{

    if(control.value==="Example"){
    return {example:true};
    }
    return null;
    
    }
    

  showHide()
  {
    if(this.flag)
    {
      this.flag=false;
    }
    else
    {
      this.flag=true;
    }
  }

}
  
  
  // this.formgroup=FormBuilder.({
  //   userId:['',Validators.required],
  //   password:['',Validators.required]
  // });
  // this.userId=this.formgroup.controls['userId'];
  // this.password=this.formgroup.controls['password'];

 
  

 
 
  